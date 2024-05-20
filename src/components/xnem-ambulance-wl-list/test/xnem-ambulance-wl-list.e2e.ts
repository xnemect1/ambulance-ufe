import { newE2EPage } from '@stencil/core/testing';

describe('xnem-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xnem-ambulance-wl-list></xnem-ambulance-wl-list>');

    const element = await page.find('xnem-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
