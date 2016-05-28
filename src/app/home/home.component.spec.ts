import {
    it,
    inject,
    describe,
    beforeEachProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import {HomeComponent} from './home.component';
import {ApiService} from '../shared/api.service';

describe('Home', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        HomeComponent,
        ApiService

    ]);

    it('should log ngOnInit', inject([HomeComponent], (home) => {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();

        home.ngOnInit();
        expect(console.log).toHaveBeenCalledWith('Hello Home');
    }));

});
