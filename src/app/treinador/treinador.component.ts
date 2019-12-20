import { Treinador } from "@angular/cli/bin/angular-pokemon/src/treinador";
import { OnInit, Component } from "@angular/cli/bin/angular-pokemon/node_modules/@angular/core";
import { TreinadorService } from "@angular/cli/bin/angular-pokemon/src/app/treinador.service";




@Component({
  selector: 'app-treinador',
  templateUrl: './treinador.component.html',
  styleUrls: ['./treinador.component.css']
})

export class TreinadorComponent implements OnInit {

  treinador = [];
  selectedTreinador: Treinador;
  isHidden = false;

  constructor(private treinaService: TreinadorService) { }

  ngOnInit() {
    this.getTreinador();
  }

  onSelect(treinador: Treinador): void {
    this.selectedTreinador = treinador;
    this.isHidden = true;
  }
  getTreinador(): void{
    this.treinaService.getTreinador()
      .subscribe(treinador => this.treinador = treinador);
  }
  save(name: string): void{
    this.treinaService.updateTreinador(this.selectedTreinador.id,{ name } as Treinador).subscribe();
  }
  delete(treinador: Treinador): void{
    this.treinador = this.treinador.filter(h => h !== treinador);
    this.treinaService.deleteTreinador(this.selectedTreinador.id).subscribe();
  }

 }
 


