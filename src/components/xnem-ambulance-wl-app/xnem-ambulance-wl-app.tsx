import { Component, Host, Prop, State, h } from '@stencil/core';
declare global {
  interface Window {
    navigation: any;
  }
}

@Component({
  tag: 'xnem-ambulance-wl-app',
  styleUrl: 'xnem-ambulance-wl-app.css',
  shadow: true,
})
export class XnemAmbulanceWlApp {
  @State() private relativePath = '';

  @Prop() basePath: string = '';
  @Prop() apiBase: string;
  @Prop() ambulanceId: string;

  componentWillLoad() {
    console.log('APP => componentWillLoad');
    const baseUri = new URL(this.basePath, document.baseURI || '/').pathname;

    const toRelative = (path: string) => {
      if (path.startsWith(baseUri)) {
        this.relativePath = path.slice(baseUri.length);
      } else {
        this.relativePath = '';
      }
    };

    window.navigation?.addEventListener('navigate', (ev: Event) => {
      if ((ev as any).canIntercept) {
        (ev as any).intercept();
      }
      let path = new URL((ev as any).destination.url).pathname;
      toRelative(path);
      console.log('Updated relative path:', this.relativePath); // Debug log
    });

    toRelative(location.pathname);
  }

  render() {
    let element = 'list';
    let entryId = '@new';

    if (this.relativePath.startsWith('entry/')) {
      element = 'editor';
      entryId = this.relativePath.split('/')[1];
      console.log('Current element:', element, 'Entry ID:', entryId); // Debug log
    }

    const navigate = (path: string) => {
      console.log('Navigating to:', path); // Debug log
      const absolute = new URL(path, new URL(this.basePath, document.baseURI)).pathname;
      window.navigation.navigate(absolute);
    };

    return (
      <Host>
        {element === 'editor' ? (
          <xnem-ambulance-wl-editor
            entry-id={entryId}
            ambulance-id={this.ambulanceId}
            api-base={this.apiBase}
            oneditor-closed={() => navigate('./list')}
          ></xnem-ambulance-wl-editor>
        ) : (
          <xnem-ambulance-wl-list
            ambulance-id={this.ambulanceId}
            api-base={this.apiBase}
            onentry-clicked={(ev: CustomEvent<string>) => navigate('./entry/' + ev.detail)}
          ></xnem-ambulance-wl-list>
        )}
      </Host>
    );
  }
}
