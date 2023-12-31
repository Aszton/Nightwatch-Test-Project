// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ["test", "nightwatch"],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: [],

  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: "",

  webdriver: {},

  test_workers: {
    enabled: true,
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: "https://automationteststore.com",

      screenshots: {
        enabled: false,
        path: "screens",
        on_failure: true,
      },

      desiredCapabilities: {
        browserName: "chrome",
      },

      webdriver: {
        start_process: true,
        server_path: "",
      },
    },

    firefox: {
      desiredCapabilities: {
        browserName: "firefox",
        alwaysMatch: {
          acceptInsecureCerts: true,
          "moz:firefoxOptions": {
            args: [
              // '-headless',
              // '-verbose'
            ],
          },
        },
      },
      webdriver: {
        start_process: true,
        server_path: "",
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ],
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            // '--headless'
          ],
        },
      },

      webdriver: {
        start_process: true,
        keep_alive: {
          enabled: true,
          keepAliveMsecs: 3000,
        },
        server_path: "",
      },
    },

    edge: {
      desiredCapabilities: {
        browserName: "MicrosoftEdge",
        "ms:edgeOptions": {
          w3c: true,
          // More info on EdgeDriver: https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/capabilities-edge-options
          args: [
            //'--headless'
          ],
        },
      },

      webdriver: {
        start_process: true,
        // Follow https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/?tabs=c-sharp#download-microsoft-edge-webdriver
        // to download the Edge WebDriver and set the location of extracted `msedgedriver` below:
        server_path: "",
        cli_args: [
          // --verbose
        ],
      },
    },
  },
};
