import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  
  {
    name: 'Preguntas Frecuentes',
    children: [
      {
        name: '¿Qué tipo de pagos aceptan?',
        children: [{name: 'Se aceptan pagos en credito y en efectivo'}],
      },
      {
        name: 'Pueden viajar menores de edad solos?',
        children: [{name: 'No, Los menores tienen que ser acompañados por un adulto'}],
      },
      {
        name: 'Hay rembolsos?',
        children: [{name: 'Nuestra empresa no ofrece rembolsos una vez reservado el vuelo'}],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  rutaimg ="../../assets/img/imgfoot.png";
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
