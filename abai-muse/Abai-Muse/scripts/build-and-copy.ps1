$ErrorActionPreference = "Stop"

# Определяем базовый путь (C:\Users\User\Desktop\mysite)
$baseDir = "C:\Users\User\Desktop\mysite"
$projectRoot = Split-Path -Parent $PSScriptRoot

# Правильные пути к Django
$djangoStatic = Join-Path $baseDir "static\abai-muse"
$templatePath = Join-Path $baseDir "templates\index.html"

Write-Host "Building React app..." -ForegroundColor Cyan
Push-Location $projectRoot
npm.cmd run build
Pop-Location

Write-Host "Copying build output to Django static..." -ForegroundColor Cyan
if (!(Test-Path $djangoStatic)) { New-Item -ItemType Directory -Force $djangoStatic | Out-Null }
Copy-Item -Recurse -Force (Join-Path $projectRoot "dist\public\*") $djangoStatic

$indexPath = Join-Path $projectRoot "dist\public\index.html"
# Читаем через .NET для совместимости со старым PowerShell
$indexHtml = [System.IO.File]::ReadAllText($indexPath)

# Ищем пути к ассетам (Vite по умолчанию кладет их в assets/)
$jsMatch = [regex]::Match($indexHtml, 'assets/[^"'' ]+\.js')
$cssMatch = [regex]::Match($indexHtml, 'assets/[^"'' ]+\.css')

if (-not $jsMatch.Success -or -not $cssMatch.Success) {
  throw "Could not find JS/CSS asset paths in built index.html"
}

Write-Host "Updating Django template: $templatePath" -ForegroundColor Cyan
if (!(Test-Path $templatePath)) { throw "Template file not found at $templatePath" }

$template = [System.IO.File]::ReadAllText($templatePath)

# Заменяем ссылки на статику Django
$newJs = $jsMatch.Value.Split('/')[-1]
$newCss = $cssMatch.Value.Split('/')[-1]

$template = [regex]::Replace($template, "{% static 'abai-muse/assets/[^']+\.js' %}", "{% static 'abai-muse/assets/$newJs' %}")
$template = [regex]::Replace($template, "{% static 'abai-muse/assets/[^']+\.css' %}", "{% static 'abai-muse/assets/$newCss' %}")

[System.IO.File]::WriteAllText($templatePath, $template)

Write-Host "Done. Django template updated successfully!" -ForegroundColor Green