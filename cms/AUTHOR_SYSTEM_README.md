# Author System Documentation

## Overview

The CMS now supports a flexible author system that allows three types of authors:

1. **Member with Bio Page** - Authors who have full memberBio documents
2. **Standalone Author** - Authors without bio pages (just name and basic info)
3. **Editorial Member Reference** - References to editorial board members with specific roles

## Schema Changes

### New Author Object Type

The new `author` object type is located at `schemaTypes/objects/author.js` and includes:

- **authorType**: Determines which fields are shown/hidden
- **memberBio**: Reference to memberBio document (when type is 'memberBio')
- **name**: Author name (when type is 'standalone' or 'editorial')
- **affiliation**: Author's affiliation/organization
- **email**: Author's email address
- **website**: Author's website
- **editorialRole**: Specific editorial role (when type is 'editorial')

### Updated Blog Schema

The blog schema now supports:

- **author**: Single author using the new author object type
- **authors**: Array of additional authors for multi-author pieces

## Usage Examples

### Single Author with Bio Page
```json
{
  "author": {
    "_type": "author",
    "authorType": "memberBio",
    "memberBio": {
      "_type": "reference",
      "_ref": "memberBio-id-here"
    }
  }
}
```

### Standalone Author
```json
{
  "author": {
    "_type": "author",
    "authorType": "standalone",
    "name": "John Doe",
    "affiliation": "University of Example",
    "email": "john@example.com"
  }
}
```

### Editorial Member
```json
{
  "author": {
    "_type": "author",
    "authorType": "editorial",
    "name": "Jane Smith",
    "affiliation": "Editorial Board",
    "editorialRole": "editor-in-chief"
  }
}
```

### Multiple Authors
```json
{
  "author": {
    "_type": "author",
    "authorType": "memberBio",
    "memberBio": {
      "_type": "reference",
      "_ref": "memberBio-id-here"
    }
  },
  "authors": [
    {
      "_type": "author",
      "authorType": "standalone",
      "name": "Guest Contributor",
      "affiliation": "Independent Scholar"
    }
  ]
}
```

## Migration

For existing blog posts with the old author reference structure, use the migration script:

```bash
cd cms
node scripts/migrateAuthors.js
```

**Note**: You'll need to set the `SANITY_TOKEN` environment variable with a token that has write permissions.

## Benefits

1. **Flexibility**: Authors no longer need bio pages to be referenced
2. **Editorial Support**: Easy reference to editorial members with specific roles
3. **Multi-author Support**: Support for pieces with multiple contributors
4. **Backward Compatibility**: Existing memberBio references still work
5. **Rich Metadata**: Standalone authors can have affiliation, email, website

## Field Visibility

Fields are automatically shown/hidden based on the selected author type:

- **memberBio**: Only shows memberBio reference field
- **standalone**: Shows name, affiliation, email, website fields
- **editorial**: Shows name, affiliation, email, website, and editorialRole fields

## Validation

The system includes validation to ensure:
- Required fields are filled based on author type
- memberBio references are valid when authorType is 'memberBio'
- Author names are provided for standalone and editorial types
