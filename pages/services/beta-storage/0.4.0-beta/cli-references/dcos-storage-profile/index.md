---
layout: layout.pug
navigationTitle: dcos storage profile
title: dcos storage profile
menuWeight: 0
notes: Code generated by docgen.go, DO NOT EDIT
enterprise: true
origin: github.com/mesosphere/dcos-storage/cli/pkg/cmd/cmd_profile.go
---
## dcos storage profile

Manage volume profiles.

### Synopsis

A volume profile represents volumes based on volume provider or volume
parameters and labels. For example, if you want to differentiate between HDDs
and SSDs for different purposes, you can create a `fast` volume profile that
identifies your SSDs and a `slow` volume profile that identifies your HDDs. If
your framework, say Cassandra, distinguishes between "cache" and "archive"
storage you can then configure it to map your `fast` volume profile to
Cassandra's "cache" storage and your `slow` volume profile to Cassandra's
"archive" storage.

```bash
dcos storage profile [flags]
```

### Options inherited from parent commands

```bash
  -h, --help               Help for this command.
  --timeout duration   Override the default request timeout. (default 55s)
```

### SEE ALSO

* [dcos storage](../)	 - Manage storage volumes, volume profiles and volume providers.
* [dcos storage profile create](./dcos-storage-profile-create/)	 - Create a volume profile.
* [dcos storage profile deactivate](./dcos-storage-profile-deactivate/)	 - Deactivate an active volume profile.
* [dcos storage profile list](./dcos-storage-profile-list/)	 - List volume profiles.
* [dcos storage profile reactivate](./dcos-storage-profile-reactivate/)	 - Activate a profile that has been deactivated.

