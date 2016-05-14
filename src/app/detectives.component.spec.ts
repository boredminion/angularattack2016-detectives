import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DetectivesAppComponent } from '../app/detectives.component';

beforeEachProviders(() => [DetectivesAppComponent]);

describe('App: Detectives', () => {
  it('should create the app',
      inject([DetectivesAppComponent], (app: DetectivesAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'detectives works!\'',
      inject([DetectivesAppComponent], (app: DetectivesAppComponent) => {
    expect(app.title).toEqual('detectives works!');
  }));
});
