import {Component} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {HttpEvent} from '@angular/common/http';
import {AuthServiceService} from '../auth/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
              private auth: AuthServiceService) {}

  onSave() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {console.log(response);
        }
      );
  }

  onFetch() {
    this.dataStorageService.getRecipes();
  }
}
