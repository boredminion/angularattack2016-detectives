// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router-deprecated';
// RxJS
import 'rxjs';
// @todo fix the extra copy
require("file?name=favicon.ico!../public/favicon.ico"); // Creates an extra copy in assets
require("file?name=CNAME!../CNAME"); // Required for Surge