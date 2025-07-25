import React from 'react';

const nasaLogo = new URL("../../nasa.png", import.meta.url);
const epaLogo = new URL("../../epa.svg", import.meta.url);
const nistLogo = new URL("../../nist.svg", import.meta.url);
const noaaLogo = new URL("../../noaa.png", import.meta.url);


export const Banner = () => {
  return (
    <section
      className="usa-banner"
      aria-label="Official website of the United States government"
    >
      <div className="usa-banner">
        <div className="usa-accordion">
          <header className="usa-banner__header">
            <div className="grid-row flex-justify flex-align-center">
              <div className="grid-col-auto">
                <div className="usa-banner__inner" style={{ color: 'white' }}>
                  <div className="grid-col-auto">
                    <img
                      className="usa-banner__header-flag"
                      aria-hidden="true"
                      src="https://cdnjs.cloudflare.com/ajax/libs/uswds/3.13.0/img/us_flag_small.png"
                      alt="U.S. flag"
                    />
                  </div>
                  <div
                    className="grid-col-fill tablet:grid-col-auto"
                    aria-hidden="true"
                    style={{ color: 'white' }}
                  >
                    <p className="usa-banner__header-text">
                      An official website of the United States government
                    </p>
                    <p className="usa-banner__header-action">Here's how you know</p>
                  </div>
                  <button
                    type="button"
                    className="usa-accordion__button usa-banner__button white-banner-button"
                    aria-expanded="false"
                    aria-controls="gov-banner"
                    style={{
                      color: 'white',
                      backgroundColor: 'transparent',
                      borderColor: 'white',
                    }}
                  >
                    <span className="usa-banner__button-text">Here's how you know</span>
                  </button>
                </div>
              </div>

              <div className="grid-col-auto partners-button-wrapper">
                <div className="usa-banner__inner">
                  <div className="grid-col-fill tablet:grid-col-auto" aria-hidden="true">
                    <p className="usa-banner__header-action" aria-hidden="true">
                      A coordinated effort
                    </p>
                  </div>
                  <button
                    type="button"
                    className="usa-accordion__button usa-banner__button white-banner-button"
                    aria-expanded="false"
                    aria-controls="partners-banner"
                    style={{
                        color: 'white',
                        backgroundColor: 'transparent',
                        borderColor: 'white',
                      }}
                  >
                    <span className="usa-banner__button-text">A coordinated effort</span>
                  </button>
                </div>
              </div>
            </div>
          </header>

          <div
            className="usa-banner__content usa-accordion__content"
            id="gov-banner"
            hidden
            style={{ textAlign: 'left' }}
          >
            <div className="grid-row grid-gap-lg">
              <div className="usa-banner__guidance tablet:grid-col-6">
                <div className="usa-media-block">
                  <div className="usa-media-block__img">
                    <img
                      src="https://cdnjs.cloudflare.com/ajax/libs/uswds/3.13.0/img/icon-dot-gov.svg"
                      alt="Dot gov"
                      className="usa-icon"
                      style={{ width: '40px', height: '40px' }}
                    />
                  </div>
                  <div className="usa-media-block__body" style={{ textAlign: 'left' }}>
                    <p>
                      <strong>Official websites use .gov</strong>
                      <br />
                      A <strong>.gov</strong> website belongs to an official government organization in
                      the United States.
                    </p>
                  </div>
                </div>
              </div>
              <div className="usa-banner__guidance tablet:grid-col-6">
                <div className="usa-media-block">
                  <div className="usa-media-block__img">
                    <img
                      src="https://cdnjs.cloudflare.com/ajax/libs/uswds/3.13.0/img/icon-https.svg"
                      alt="https"
                      className="usa-icon"
                      style={{ width: '40px', height: '40px' }}
                    />
                  </div>
                  <div className="usa-media-block__body" style={{ textAlign: 'left' }}>
                    <p>
                      <strong>Secure .gov websites use HTTPS</strong>
                      <br />
                      A <strong>lock</strong> or <strong>https://</strong> means you've safely connected
                      to the .gov website. Share sensitive information only on official, secure
                      websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="usa-banner__content usa-accordion__content"
            id="partners-banner"
            hidden
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem',
                backgroundColor: '#ddd6d2',
                // color: '#1b1b1b',
                width: '100%',
                borderColor: 'red',
                borderWidth: '5px'
              }}
            >
              <div style={{ margin: '0 124px 0 6px', width: '25%' }}>
                <p>
                  The US GHG Center would not be possible without the collaboration
                  of the partnering U.S. governmental agencies and other
                  non-governmental entities. The initial partners of this effort are
                  NASA, EPA, NIST, and NOAA.
                </p>
              </div>
              <div className="grid-row grid-gap-lg" style={{ flex: 1 }}>
                <div className="usa-banner__guidance tablet:grid-col-6">
                  <div className="usa-media-block__body">
                  <img
                      src={nasaLogo}
                      alt="NASA logo"
                     
                    />
            <img
                src={epaLogo}
                alt="EPA logo"
                style={{ height: '76px' }}
            />
            <img
                src={nistLogo}
                alt="NIST logo"
         
            />
            <img
                src={noaaLogo}
                alt="NOAA logo"
            />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
