/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  addProviders, beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ExecutivesComponent } from './executives.component';
import { Router } from '@angular/router';

describe('Component: Executives', () => {
  beforeEach(() => {
    addProviders([Router]);
  });

  it('should create an instance', inject([Router], (_router) => {
    // actual test
    let component = new ExecutivesComponent(_router);
    expect(component).toBeTruthy();
  }));
});