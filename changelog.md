To install jx 2.1.97 see the [install guide](https://jenkins-x.io/getting-started/install/)

### Linux

```shell
curl -L https://github.com/jenkins-x/jx/releases/download/v2.1.97/jx-linux-amd64.tar.gz | tar xzv 
sudo mv jx /usr/local/bin
```

### macOS

```shell
brew tap jenkins-x/jx
brew install jx
```
## Changes

### Bug Fixes

* making sure PVS finalizers get  set to nil during 'jx uninstall'
