import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-a16',
  templateUrl: './a16.component.html',
  styles: [`
    virtual-scroller {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    virtual-scroller:hover {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    p {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    p:hover {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    table {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    table:hover {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    div {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    div:hover {
      background: white;
      color: black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    slds-file-selector {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    slds-file-selector:hover {
      background: white;
      color: black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    tree-root {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    slds-file-selector:hover {
      background: white;
      color: black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
  `]
})
export class A16Component implements OnInit {
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  options = {};
  constructor() { }

  public az: any = {id: 1, personsNames: 'aaa'};
  public bz: any = {id: 1, personsNames: 'bbb'};
  public cz: any = {id: 1, ideNumber: '1234abc', isPrincipal: true, isInBuilding: true};

  public group: any = {
    description: {
      faker: 'lorem.paragraph'
    }
  };
  public conditionalField: any = {
    type: {
      values: ['HOUSE', 'CAR', 'MOTORBIKE']
    },
    'object.type=="HOUSE",location': {
      faker: 'address.city'
    },
    'object.type=="CAR"||object.type=="MOTORBIKE",speed': {
      faker: 'random.number'
    }
  };
  public users: any = {
    firstName: {
      faker: 'name.firstName'
    },
    lastName: {
      faker: 'name.lastName'
    },
    country: {
      faker: 'address.country'
    },
    createdAt: {
      faker: 'date.past'
    },
    username: () => (
      this.users.lastName.substring(0, 5) +
      this.users.firstName.substring(0, 3) +
      Math.floor(Math.random() * 10)
    ),
    ok: () => this.users.username(),
    conditionalField: this.conditionalField
  };


  public aa(o: any | {id: number}): any | {id: number} {
    console.log(o);
    o.id += 1;
    o.id += 1;
    return o;
  }

  public bb(o: any | {id: number}): any | {id: number} {
    console.log(o);
    o.id += 1;
    o.id += 1;
    return o;
  }

  public cc(o: any | {id: number}): any | {id: number} {
    console.log(o);
    o.id += 1;
    o.id += 1;
    return o;
  }

  public fibonacci(num): number {
    // tslint:disable-next-line:one-variable-per-declaration
    let a = 1, b = 0, temp;

    while (num >= 0) {
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }

    return b;
  }

  public ngOnInit() {
    // call useless methods
    this.cc(this.bb(this.aa(this.az)));
    this.cc(this.bb(this.aa(this.bz)));
    this.cc(this.bb(this.aa(this.cz)));
    // call fibonacci
    this.fibonacci(10);
    // edit class props
    this.users.firstName += '!';
    this.conditionalField.type = true;
    this.group.description += 'Heyaa';
  }

}