import { newE2EPage } from '@stencil/core/testing';

describe('xnem-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xnem-ambulance-wl-editor></xnem-ambulance-wl-editor>');

    const element = await page.find('xnem-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
