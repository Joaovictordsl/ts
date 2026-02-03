import { OnInit } from '@angular/core';
export declare class App implements OnInit {
    profiles: import("@angular/core", { with: { "resolution-mode": "import" } }).WritableSignal<any[]>;
    newName: import("@angular/core", { with: { "resolution-mode": "import" } }).WritableSignal<string>;
    description: import("@angular/core", { with: { "resolution-mode": "import" } }).WritableSignal<string>;
    ngOnInit(): void;
    loadProfiles(): Promise<void>;
    createProfile(): Promise<void>;
}
