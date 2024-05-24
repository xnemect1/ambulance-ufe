import { newE2EPage } from '@stencil/core/testing';

describe('xnem-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xnem-ambulance-wl-app></xnem-ambulance-wl-app>');

    const element = await page.find('xnem-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
