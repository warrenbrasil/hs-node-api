
const getConstants = (host) => {
  const defaultApiHost = host || 'https://api.hubapi.com';

  const consts = {
    api: {
      account: {
        details: `${defaultApiHost}/integrations/v1/me`,
        dailyLimit: `${defaultApiHost}/integrations/v1/limit/daily`
      },
      files: {
        getFilesInFolder: `${defaultApiHost}/filemanager/api/v2/files`,
        getFolders: `${defaultApiHost}/filemanager/api/v2/folders`
      },
      pages: {
        create: `${defaultApiHost}/content/api/v2/pages`,
        byId: `${defaultApiHost}/content/api/v2/pages/{id}`,
        clone: `${defaultApiHost}/content/api/v2/pages/{id}/clone`,
        list: `${defaultApiHost}/content/api/v2/pages`,
        buffer: `${defaultApiHost}/content/api/v2/pages/{id}/buffer`,
        bufferedChanges: `${defaultApiHost}/content/api/v2/pages/{id}/has-buffered-changes`,
        publishAction: `${defaultApiHost}/content/api/v2/pages/{id}/publish-action`,
        pushBufferLive: `${defaultApiHost}/content/api/v2/pages/{id}/push-buffer-live`,
        restoreDeleted: `${defaultApiHost}/content/api/v2/pages/{id}/restore-deleted`,
        validateBuffer: `${defaultApiHost}/content/api/v2/pages/{id}/validate-buffer`,
        versions: `${defaultApiHost}/content/api/v2/pages/{id}/versions`,
        restoreVersion: `${defaultApiHost}/content/api/v2/pages/{id}/versions/restore`
      },
      deals: {
        recentlyCreated: `${defaultApiHost}/deals/v1/deal/recent/created`,
        getAll: `${defaultApiHost}/deals/v1/deal/paged`,
        byId: `${defaultApiHost}/deals/v1/deal/{id}`,
        create: `${defaultApiHost}/deals/v1/deal`,
        update: `${defaultApiHost}/deals/v1/deal/{id}`,
        batchUpdate: `${defaultApiHost}/deals/v1/batch-async/update`
      },
      emailEvents: {
        campaignsWithRecentActivity: `${defaultApiHost}/email/public/v1/campaigns`,
        campaign: `${defaultApiHost}/email/public/v1/campaigns/{campaignId}`
      },
      emailSubscriptions: {
        updateStatus: `${defaultApiHost}/email/public/v1/subscriptions/{email}`,
        getStatus: `${defaultApiHost}/email/public/v1/subscriptions/{email}`
      },
      forms: {
        getForm: `${defaultApiHost}/forms/v2/forms/{formId}`,
        submissions: `${defaultApiHost}/form-integrations/v1/submissions/forms/{formId}`,
        submitForm:
          'https://forms.hubspot.com/uploads/form/v2/{portalId}/{formId}',
        formFields: `${defaultApiHost}/forms/v2/fields/{formId}`,
        submitFormV3:
          'https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formId}'
      },
      social: {
        channels: `${defaultApiHost}/broadcast/v1/channels/setting/publish/current`,
        createBroadcastMessage: `${defaultApiHost}/broadcast/v1/broadcasts`
      },
      domains: {
        getAll: `${defaultApiHost}/content/api/v4/domains`,
        byId: `${defaultApiHost}/content/api/v4/domains/{id}`
      },
      layouts: {
        getAll: `${defaultApiHost}/content/api/v2/layouts`,
        byId: `${defaultApiHost}/content/api/v2/layouts/{id}`,
        getBuffer: `${defaultApiHost}/content/api/v2/layouts/{id}/buffer`,
        hasBufferedChanges: `${defaultApiHost}/content/api/v2/layouts/{id}/has-buffered-changes`,
        getPreviousVersions: `${defaultApiHost}/content/api/v2/layouts/{id}/versions`,
        getPreviousVersion: `${defaultApiHost}/content/api/v2/layouts/{id}/versions/{versionId}`
      },
      templates: {
        base: `${defaultApiHost}/content/api/v2/templates`,
        byId: `${defaultApiHost}/content/api/v2/templates/{templateId}`,
        buffer: `${defaultApiHost}/content/api/v2/templates/{templateId}/buffer`,
        pages: `${defaultApiHost}/cosindex/api/v1/connections/{templateId}/parents`,
        hasBufferedChanges: `${defaultApiHost}/content/api/v2/templates/{templateId}/has-buffered-changes`,
        pushBufferLive: `${defaultApiHost}/content/api/v2/templates/{templateId}/push-buffer-live`,
        versions: `${defaultApiHost}/content/api/v2/templates/{templateId}/versions`,
        version: `${defaultApiHost}/content/api/v2/templates/{templateId}/versions/{versionId}`,
        restore: `${defaultApiHost}/content/api/v2/templates/{templateId}/versions/restore`,
      },
      email: {
        getSubscriptions: `${defaultApiHost}/email/public/v1/subscriptions`
      },
      transactionalEmail: {
        singleSend: `${defaultApiHost}/email/public/v1/singleEmail/send`
      },
      blog: {
        authors: `${defaultApiHost}/blogs/v3/blog-authors`,
        authorById: `${defaultApiHost}/blogs/v3/blog-authors/{id}`,
        authorSearch: `${defaultApiHost}/blogs/v3/blog-authors/search`,
        comments: `${defaultApiHost}/comments/v3/comments`,
        commentById: `${defaultApiHost}/comments/v3/comments/{id}`,
        restoreDeletedComment: `${defaultApiHost}/comments/v3/comments/{id}/restore`,
        getAll: `${defaultApiHost}/content/api/v2/blogs`,
        byId: `${defaultApiHost}/content/api/v2/blogs/{id}`,
        getVersions: `${defaultApiHost}/content/api/v2/blogs/{blog_id}/versions`,
        getVersion: `${defaultApiHost}/content/api/v2/blogs/{blog_id}/versions/{revision_id}`,
        posts: `${defaultApiHost}/content/api/v2/blog-posts`,
        postById: `${defaultApiHost}/content/api/v2/blog-posts/{id}`,
        clonePostById: `${defaultApiHost}/content/api/v2/blog-posts/{id}/clone`,
        restorePostById: `${defaultApiHost}/content/api/v2/blog-posts/{id}/restore-deleted`,
        publishOrSchedulePost: `${defaultApiHost}/content/api/v2/blog-posts/{id}/publish-action`,
        postAutoSaveBuffer: `${defaultApiHost}/content/api/v2/blog-posts/{id}/buffer`,
        validatePostAutoSaveBuffer: `${defaultApiHost}/content/api/v2/blog-posts/{id}/validate-buffer`,
        postAutoSaveBufferStatus: `${defaultApiHost}/content/api/v2/blog-posts/{id}/has-buffered-changes`,
        postVersions: `${defaultApiHost}/content/api/v2/blog-posts/{id}/versions`,
        restorePostVersion: `${defaultApiHost}/content/api/v2/blog-posts/{id}/versions/restore`,
        postVersionById: `${defaultApiHost}/content/api/v2/blog-posts/{id}/versions/{version_id}`,
        pushPostAutosaveBufferToLive: `${defaultApiHost}/content/api/v2/blog-posts/{id}/push-buffer-live`,
        topics: `${defaultApiHost}/blogs/v3/topics`,
        groupTopics: `${defaultApiHost}/blogs/v3/topics/group-topics`,
        topic: `${defaultApiHost}/blogs/v3/topics/{id}`,
        topicSearch: `${defaultApiHost}/blogs/v3/topics/search`
      },
      calendar: {
        events: `${defaultApiHost}/calendar/v1/events`,
        createTask: `${defaultApiHost}/calendar/v1/events/task`,
        taskById: `${defaultApiHost}/calendar/v1/events/task/{taskId}`
      },
      contacts: {
        getAll: `${defaultApiHost}/contacts/v1/lists/all/contacts/all`,
        deleteById: `${defaultApiHost}/contacts/v1/contact/vid/{vid}`,
        byId: `${defaultApiHost}/contacts/v1/contact/vid/{vid}/profile`,
        byEmail: `${defaultApiHost}/contacts/v1/contact/email/{email}/profile`,
        byUtk: `${defaultApiHost}/contacts/v1/contact/utk/{utk}/profile`,
        createContact: `${defaultApiHost}/contacts/v1/contact/createOrUpdate/email/{email}/`,
        batchUpdateContacts: `${defaultApiHost}/contacts/v1/contact/batch/`,
        getRecentlyModified: `${defaultApiHost}/contacts/v1/lists/recently_updated/contacts/recent`,
        search: `${defaultApiHost}/contacts/v1/search/query`
      },
      contactsList: {
        byId: `${defaultApiHost}/contacts/v1/lists/{listId}`,
        contactsByListId: `${defaultApiHost}/contacts/v1/lists/{listId}/contacts/all`,
        addContactsToList: `${defaultApiHost}/contacts/v1/lists/{listId}/add`
      },
      contactsProperties: {
        getAllContactsProperties: `${defaultApiHost}/properties/v1/contacts/properties`
      },
      company: {
        create: `${defaultApiHost}/companies/v2/companies/`,
        batchUpdate: `${defaultApiHost}/companies/v1/batch-async/update`,
        byId: `${defaultApiHost}/companies/v2/companies/{companyId}`,
        contacts: `${defaultApiHost}/companies/v2/companies/{companyId}/contacts`,
        byDomain: `${defaultApiHost}/companies/v2/domains/{domain}/companies`
      },
      workflows: {
        eventLogs: `${defaultApiHost}/automation/v3/logevents/workflows/{workflowId}/filter`,
        enrollments: `${defaultApiHost}/automation/v2/workflows/enrollments/contacts/{id}`,
        enrollContact: `${defaultApiHost}/automation/v2/workflows/{workflowId}/enrollments/contacts/{email}`,
        create: `${defaultApiHost}/automation/v3/workflows`,
        getAll: `${defaultApiHost}/automation/v3/workflows`,
        byId: `${defaultApiHost}/automation/v3/workflows/{id}`
      },
      hubdb: {
        tables: `${defaultApiHost}/hubdb/api/v2/tables`,
        rows: `${defaultApiHost}/hubdb/api/v2/tables/{tableId}/rows`,
        table: `${defaultApiHost}/hubdb/api/v2/tables/{tableId}`,
        row: `${defaultApiHost}/hubdb/api/v2/tables/{tableId}/rows/{id}`,
        rowsBatchUpdate: `${defaultApiHost}/hubdb/api/v2/tables/{tableId}/rows/batch/update`,
        cell: `${defaultApiHost}/hubdb/api/v2/tables/{tableId}/rows/{rowId}/cells/{cellId}`,
        cloneTable: `${defaultApiHost}/hubdb/api/v2/tables/{tableId}/clone`,
        cloneRow: `${defaultApiHost}/hubdb/api/v2/tables/{tableId}/rows/{rowId}/clone`,
        importCsv: `${defaultApiHost}/hubdb/api/v2/tables/{tableId}/import`,
        publishTable: `${defaultApiHost}/hubdb/api/v2/tables/{tableId}/publish`
      },
      engagements: {
        create: `${defaultApiHost}/engagements/v1/engagements`
      },
      oauth: {
        tokenInfo: `${defaultApiHost}/oauth/v1/access-tokens/{token}`
      },
      urlMappings: {
        getAll: `${defaultApiHost}/url-mappings/v3/url-mappings`,
        byId: `${defaultApiHost}/url-mappings/v3/url-mappings/{id}`,
        create: `${defaultApiHost}/url-mappings/v3/url-mappings`,
        update: `${defaultApiHost}/url-mappings/v3/url-mappings/{id}`,
        delete: `${defaultApiHost}/url-mappings/v3/url-mappings/{id}`
      }
    }
  };

  return consts;
}

export default getConstants