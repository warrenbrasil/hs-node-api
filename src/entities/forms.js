
import createRequest, { requiresAuthentication } from '../utilities';
import constants from '../constants';

const omit = require('lodash.omit');

const defaults = {};
let _baseOptions;

const submitFormV3 = async (portalId, formId, opts = {}) => {
  try {
    const method = 'POST';
    const response = await createRequest(
      constants(_baseOptions.url).api.forms.submitFormV3,
      {
        formId,
        portalId,
        method,
        body: {
          ...opts,
        }
      }
    );
    return Promise.resolve(response);
  } catch (e) {
    return Promise.reject(e);
  }
};

const submitForm = async (portalId, formId, opts = {}) => {
  try {
    // hs-context params
    const { hutk, ipAddress, pageUrl, pageName, redirectUrl } = opts;

    const method = 'POST';
    const hs_context = JSON.stringify({
      hutk,
      ipAddress,
      pageUrl,
      pageName,
      redirectUrl
    });

    const mergedProps = Object.assign(
      {
        hs_context
      },
      defaults,
      _baseOptions,
      // Property values. This is essentially the entire payload minus the formId, portalId and hs_context params.
      omit(opts, ['hutk', 'ipAddress', 'pageUrl', 'pageName', 'redirectUrl'])
    );

    // Remove the hapikey from these requests
    if (mergedProps.hapikey) {
      delete mergedProps.hapikey;
    }

    await createRequest(
      constants(_baseOptions.url).api.forms.submitForm,
      {
        formId,
        portalId,
        method
      },
      mergedProps
    );

    return Promise.resolve({ submitted: true });
  } catch (e) {
    return Promise.reject(e.message);
  }
};

const getFormFields = async formId => {
  try {
    requiresAuthentication(_baseOptions);
    const mergedProps = Object.assign({}, defaults, _baseOptions);
    const formFields = await createRequest(
      constants(_baseOptions.url).api.forms.formFields,
      { formId },
      mergedProps
    );
    return Promise.resolve(formFields);
  } catch (e) {
    return Promise.reject(e);
  }
};

const getSubmissions = async (formId, opts = {}) => {
  try {
    requiresAuthentication(_baseOptions);
    const mergedProps = Object.assign({}, defaults, _baseOptions, opts);
    const submissions = await createRequest(
      constants(_baseOptions.url).api.forms.submissions,
      { formId },
      mergedProps
    );
    return Promise.resolve(submissions);
  } catch (e) {
    return Promise.reject(e);
  }
};

const getForm = async (formId, opts = {}) => {
  try {
    requiresAuthentication(_baseOptions);
    const mergedProps = Object.assign({}, defaults, _baseOptions, opts);
    const form = await createRequest(
      constants(_baseOptions.url).api.forms.getForm,
      { formId },
      mergedProps,
    );
    return Promise.resolve(form);
  } catch (e) {
    return Promise.reject(e);
  }
}

export default function formsApi(baseOptions) {
  _baseOptions = baseOptions;

  return {
    /**
     * Submit a form with data See the {@link https://developers.hubspot.com/docs/methods/forms/submit_form|developer docs} for full spec.
     * @async
     * @memberof hs/forms
     * @method submitForm
     * @param {int} portalId Portal ID the form resides on
     * @param {string} formId ID of form to submit.
     * @param {object} formFields Key/value pairs of form fields.
     * @example
     * const hs = new HubspotClient(props);
     * hs.forms.submitForm(portalId, formId, formFields).then(response => console.log(response));
     * @returns {Promise}
     */
    submitForm,
    /**
     * Get Form, including fields, options and validation
     * @async 
     * @memberof hs/forms
     * @method getForm
     * @param {string} formId
     */
    getForm,
    /**
     * Get Form Fields for Specified Form
     * @async
     * @memberof hs/forms
     * @method getFormFields
     * @param {string} formId
     * @example
     * const hs = new HubSpotClient(props);
     * const formFields = await hs.forms.getFormFields(formId)
     */
    getFormFields,
    /**
     * Get form submissions for specific form
     * @async
     * @memberof hs/forms
     * @method getSubmissions
     * @param {string} formId
     * @example
     * const hs = new HubSpotClient(props);
     * const submissions = await hs.forms.getSubmissions(formId)
     */
    getSubmissions,
    /**
     * Submit a form with data See the {@link https://developers.hubspot.com/docs/methods/forms/submit_form_v3|developer docs} for full spec.
     * @async
     * @memberof hs/forms
     * @method submitFormV3
     * @param {int} portalId Portal ID the form resides on
     * @param {string} formId ID of form to submit.
     * @param {object} submitBody { fields, context, legalConsentOptions } see docs for full spec
     * @example
     * const hs = new HubspotClient(props);
     * hs.forms.submitFormV3(portalId, formId, submitBody).then(response => console.log(response));
     * @returns {Promise}
     */
    submitFormV3,
  };
}
