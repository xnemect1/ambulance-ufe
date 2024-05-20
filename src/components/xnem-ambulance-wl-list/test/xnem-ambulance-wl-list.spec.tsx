import { newSpecPage } from '@stencil/core/testing';
import { XnemAmbulanceWlList } from '../xnem-ambulance-wl-list';

describe('xnem-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XnemAmbulanceWlList],
      html: `<xnem-ambulance-wl-list></xnem-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xnem-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xnem-ambulance-wl-list>
    `);
  });
});
