import { StatusItem } from './status-item';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spy',
  template: 'spy'
})
class SpyComponent{}

describe('StatusItem', () => {
  fit('should create an instance', () => {
    expect(new StatusItem(SpyComponent, {title: 'test', resulted: [] })).toBeTruthy();
  });
});
