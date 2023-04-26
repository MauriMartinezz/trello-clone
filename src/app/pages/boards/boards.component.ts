import { Component } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faBox,
  faHouse,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  faClock = faClock;
  faTrello = faTrello;
  faBox = faBox;
  faHouse = faHouse;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Subitem 1.1',
        },
        {
          label: 'Subitem 1.12',
        },
        {
          label: 'Subitem 1.3',
        },
      ],
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub item 2.1',
        },
      ],
    },
    {
      label: 'Settings',
      items: [
        {
          label: 'Profile',
        },
        {
          label: 'Security',
        },
        {
          label: 'Account',
        },
        {
          label: 'Privacy',
        },
        {
          label: 'Logout',
        },
      ],
    },
  ];
}
