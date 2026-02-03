import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para o *ngFor
import { FormsModule } from '@angular/forms'; // Para o [(ngModel)]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicione estes dois aqui
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  // Signals são a nova forma do Angular gerenciar estado (opcional, mas moderno)
  profiles = signal<any[]>([]);
  newName = signal('');
  description = signal('');

  ngOnInit() {
    this.loadProfiles();
  }

  async loadProfiles() {
    const res = await fetch('http://localhost:3000/profiles');
    const data = await res.json();
    this.profiles.set(data); // Atualiza o signal com os perfis do banco
  }

 
  async createProfile() {
  // Use os parênteses para pegar o VALOR do signal
  const body = { 
    name: this.newName(), 
    description: this.description() 
  };

  console.log('Enviando para o banco:', body); // Adicione esse log para testar!

  const response = await fetch('http://localhost:3000/profiles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (response.ok) {
    this.newName.set('');
    this.description.set('');
    this.loadProfiles();
  } else {
    console.error('Erro ao salvar:', await response.json());
  }
}
}