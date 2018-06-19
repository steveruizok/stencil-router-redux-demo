import { TestWindow } from '@stencil/core/testing';
import { AppCounter } from './app-counter';

describe('app-counter', () => {
  it('should build', () => {
    expect(new AppCounter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppCounterElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppCounter],
        html: '<app-counter></app-counter>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
