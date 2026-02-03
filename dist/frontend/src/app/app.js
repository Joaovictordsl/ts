"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
let App = class App {
    profiles = (0, core_1.signal)([]);
    newName = (0, core_1.signal)('');
    description = (0, core_1.signal)('');
    ngOnInit() {
        this.loadProfiles();
    }
    async loadProfiles() {
        const res = await fetch('http://localhost:3000/profiles');
        const data = await res.json();
        this.profiles.set(data);
    }
    async createProfile() {
        const body = {
            name: this.newName(),
            description: this.description()
        };
        console.log('Enviando para o banco:', body);
        const response = await fetch('http://localhost:3000/profiles', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        if (response.ok) {
            this.newName.set('');
            this.description.set('');
            this.loadProfiles();
        }
        else {
            console.error('Erro ao salvar:', await response.json());
        }
    }
};
exports.App = App;
exports.App = App = __decorate([
    (0, core_1.Component)({
        selector: 'app-root',
        standalone: true,
        imports: [common_1.CommonModule, forms_1.FormsModule],
        templateUrl: './app.html',
        styleUrl: './app.css'
    })
], App);
//# sourceMappingURL=app.js.map