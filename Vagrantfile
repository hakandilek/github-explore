# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
	config.vm.box = "ubuntu/trusty64"
	config.vm.synced_folder ".", "/vagrant", type: "smb"
	config.vm.provision :shell, :privileged => false, :path => "bootstrap.sh"
	config.vm.network :forwarded_port, guest: 8000, host: 8000
        config.vm.provider "virtualbox" do |v|
          v.memory = 1024
          v.cpus = 2
        end
end
