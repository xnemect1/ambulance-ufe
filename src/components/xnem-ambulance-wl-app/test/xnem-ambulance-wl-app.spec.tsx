import { newSpecPage } from '@stencil/core/testing';
import { XnemAmbulanceWlApp } from '../xnem-ambulance-wl-app';

describe('xnem-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XnemAmbulanceWlApp],
      html: `<xnem-ambulance-wl-app base-path="/"></xnem-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('xnem-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XnemAmbulanceWlApp],
      html: `<xnem-ambulance-wl-app base-path="/ambulance-wl/"></xnem-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('xnem-ambulance-wl-list');
  });
});
