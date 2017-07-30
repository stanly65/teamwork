import {WFMComponent} from "../framework/index";

class AppComponent extends WFMComponent {
    constructor(config) {
        super(config)
    }
}


export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
    <app-header></app-header>
    <div class="row">
        <div class="col s6 offset-s3" style="margin-top: 40px;">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Главната страница</span>
              <p>Засега тук няма никакъв функционал!</p>
            </div>
            <div class="card-action">
              <a href="#">Води до друга страница</a>
            </div>
          </div>
        </div>
    </div>
     `
})