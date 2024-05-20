import { newSpecPage } from '@stencil/core/testing';
import { XnemAmbulanceWlList } from '../xnem-ambulance-wl-list';

describe('xnem-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XnemAmbulanceWlList],
      html: `<xnem-ambulance-wl-list></xnem-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as XnemAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
