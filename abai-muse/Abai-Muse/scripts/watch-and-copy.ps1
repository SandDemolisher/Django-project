$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$srcRoot = Join-Path $projectRoot "client\src"
$buildScript = Join-Path $PSScriptRoot "build-and-copy.ps1"

Write-Host "Watching for changes in $srcRoot" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop." -ForegroundColor Yellow

$lastHash = ""

while ($true) {
  $files = Get-ChildItem -Recurse -File $srcRoot | Where-Object {
    $_.Extension -in ".ts", ".tsx", ".css"
  }

  $snapshot = $files | ForEach-Object { "$($_.FullName)|$($_.LastWriteTimeUtc.Ticks)" }
  $hash = [string]([System.BitConverter]::ToString(
    (New-Object System.Security.Cryptography.SHA256Managed).ComputeHash(
      [System.Text.Encoding]::UTF8.GetBytes(($snapshot -join "`n"))
    )
  ))

  if ($lastHash -ne "" -and $hash -ne $lastHash) {
    Write-Host "Change detected. Rebuilding..." -ForegroundColor Green
    & $buildScript
    Write-Host "Rebuild complete." -ForegroundColor Green
  }

  $lastHash = $hash
  Start-Sleep -Seconds 2
}
