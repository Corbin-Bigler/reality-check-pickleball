#!/bin/bash

EXPORT_DIR="./emulator-data"
sudo firebase emulators:start --import "$EXPORT_DIR" --export-on-exit "$EXPORT_DIR"
