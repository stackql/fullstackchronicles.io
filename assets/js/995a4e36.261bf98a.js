(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[23485],{56502:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>w});var n=a(83117),r=(a(67294),a(3905)),o=a(4729),i=a(35647),s=a.n(i),l=a(68501),c=a.n(l);const u={slug:"creating-a-site-to-site-vpn-connection-between-gcp-and-azure-with-google-private-access",title:"Creating a Site to Site VPN Connection Between GCP and Azure with Google Private Access",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!1,image:"images/azure_to_gcp_feature_image-1.png",tags:["azure","gcp","google-cloud-platform","googlecloudplatform","hybrid-cloud","microsoft","microsoft-azure","multi-cloud","private-networking","vpn"],keywords:["azure","gcp","google-cloud-platform","googlecloudplatform","hybrid-cloud","microsoft","microsoft-azure","multi-cloud","private-networking","vpn"]},p=void 0,d={permalink:"/creating-a-site-to-site-vpn-connection-between-gcp-and-azure-with-google-private-access",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/src/blog/2020-03-27-creating-a-site-to-site-vpn-connection-between-gcp-and-azure-with-google-private-access/index.md",source:"@site/blog/2020-03-27-creating-a-site-to-site-vpn-connection-between-gcp-and-azure-with-google-private-access/index.md",title:"Creating a Site to Site VPN Connection Between GCP and Azure with Google Private Access",description:"This article demonstrates creating a site to site IPSEC VPN connection between a GCP VPC network and an Azure Virtual Network, enabling private RFC1918 network connectivity between virtual networks in both clouds. This is done using a single PowerShell script leveraging Azure PowerShell and gcloud commands in the Google SDK.",date:"2020-03-27T00:00:00.000Z",formattedDate:"March 27, 2020",tags:[{label:"azure",permalink:"/tags/azure"},{label:"gcp",permalink:"/tags/gcp"},{label:"google-cloud-platform",permalink:"/tags/google-cloud-platform"},{label:"googlecloudplatform",permalink:"/tags/googlecloudplatform"},{label:"hybrid-cloud",permalink:"/tags/hybrid-cloud"},{label:"microsoft",permalink:"/tags/microsoft"},{label:"microsoft-azure",permalink:"/tags/microsoft-azure"},{label:"multi-cloud",permalink:"/tags/multi-cloud"},{label:"private-networking",permalink:"/tags/private-networking"},{label:"vpn",permalink:"/tags/vpn"}],readingTime:11.78,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"creating-a-site-to-site-vpn-connection-between-gcp-and-azure-with-google-private-access",title:"Creating a Site to Site VPN Connection Between GCP and Azure with Google Private Access",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!1,image:"images/azure_to_gcp_feature_image-1.png",tags:["azure","gcp","google-cloud-platform","googlecloudplatform","hybrid-cloud","microsoft","microsoft-azure","multi-cloud","private-networking","vpn"],keywords:["azure","gcp","google-cloud-platform","googlecloudplatform","hybrid-cloud","microsoft","microsoft-azure","multi-cloud","private-networking","vpn"]},prevItem:{title:"Forseti Terraform Validator: Enforcing resource policy compliance in your CI pipeline",permalink:"/forseti-terraform-validator-enforcing-resource-policy-compliance-in-your-ci-pipeline"},nextItem:{title:"Spark in the Google Cloud Platform Part 2",permalink:"/spark-in-the-google-cloud-platform-part-2"}},g={authorsImageUrls:[void 0]},w=[{value:"Step 1 : Authenticate to Azure",id:"step-1--authenticate-to-azure",level:2},{value:"Step 2 : Create a Resource Group (Azure)",id:"step-2--create-a-resource-group-azure",level:2},{value:"Step 3 : Create a Virtual Network with Subnets and Routes (Azure)",id:"step-3--create-a-virtual-network-with-subnets-and-routes-azure",level:2},{value:"Step 4 : Create Network Security Groups (Azure)",id:"step-4--create-network-security-groups-azure",level:2},{value:"Step 5 : Create Public IP Addresses (Azure)",id:"step-5--create-public-ip-addresses-azure",level:2},{value:"Step 6 : Create Virtual Network Gateway (Azure)",id:"step-6--create-virtual-network-gateway-azure",level:2},{value:"Step 7 : Create a VPC Network and Subnetwork(s) (GCP)",id:"step-7--create-a-vpc-network-and-subnetworks-gcp",level:2},{value:"Step 8 : Create an External IP (GCP)",id:"step-8--create-an-external-ip-gcp",level:2},{value:"Step 9 : Create Firewall Rules (GCP)",id:"step-9--create-firewall-rules-gcp",level:2},{value:"Step 10 : Create VPN Gateway and Forwarding Rules (GCP)",id:"step-10--create-vpn-gateway-and-forwarding-rules-gcp",level:2},{value:"Step 10 : Create VPN Tunnel (GCP Side)",id:"step-10--create-vpn-tunnel-gcp-side",level:2},{value:"Step 11 : Create Static Routes (GCP Side)",id:"step-11--create-static-routes-gcp-side",level:2},{value:"Step 12 : Create a Local Gateway (Azure)",id:"step-12--create-a-local-gateway-azure",level:2},{value:"Step 13 : Create a VPN Connection (Azure)",id:"step-13--create-a-vpn-connection-azure",level:2},{value:"Step 14 : Create a Private DNS Zone for googleapis.com (Azure)",id:"step-14--create-a-private-dns-zone-for-googleapiscom-azure",level:2},{value:"Step 15 : Create a Virtual Machine (Azure)",id:"step-15--create-a-virtual-machine-azure",level:2},{value:"Step 16 : Create a VM Instance (GCP)",id:"step-16--create-a-vm-instance-gcp",level:2},{value:"Test Connectivity",id:"test-connectivity",level:2},{value:"Azure to GCP",id:"azure-to-gcp",level:3},{value:"GCP to Azure",id:"gcp-to-azure",level:3},{value:"Test Private Google Access from Azure",id:"test-private-google-access-from-azure",level:2}],m={toc:w};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article demonstrates creating a site to site IPSEC VPN connection between a GCP VPC network and an Azure Virtual Network, enabling private RFC1918 network connectivity between virtual networks in both clouds. This is done using a single PowerShell script leveraging Azure PowerShell and gcloud commands in the Google SDK."),(0,r.kt)("p",null,"Additionally, we will use Azure Private DNS to enable private access between Azure hosts and GCP APIs (such as Cloud Storage or Big Query)."),(0,r.kt)("p",null,"An overview of the solution is provided here:"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(60051).Z},(0,r.kt)("img",{alt:"Azure to GCP VPN Design",src:a(31015).Z,width:"3572",height:"2407"}))),(0,r.kt)("p",null,"One note before starting - site to site VPN connections between GCP and Azure currently do not support dynamic routing using BGP, however creating some simple routes on either end of the connection will be enough to get going."),(0,r.kt)("p",null,"Let\u2019s go through this step by step:"),(0,r.kt)("h2",{id:"step-1--authenticate-to-azure"},"Step 1 : Authenticate to Azure"),(0,r.kt)("p",null,"Azure\u2019s account equivalent is a subscription, the following command from Azure Powershell is used to authenticate a user to one or more subscriptions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Connect-AzAccount\n")),(0,r.kt)("p",null,"This command will open a browser window prompting you for Microsoft credentials, once authenticated you will be returned to the command line."),(0,r.kt)("h2",{id:"step-2--create-a-resource-group-azure"},"Step 2 : Create a Resource Group (Azure)"),(0,r.kt)("p",null,"A resource group is roughly equivalent to a project in GCP. You will need to supply a Location (equivalent to a GCP region):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'New-AzResourceGroup `\n  -Name "azure-to-gcp" `\n  -Location "Australia Southeast"\n')),(0,r.kt)("h2",{id:"step-3--create-a-virtual-network-with-subnets-and-routes-azure"},"Step 3 : Create a Virtual Network with Subnets and Routes (Azure)"),(0,r.kt)("p",null,"An Azure Virtual Network is the equivalent of a VPC network in GCP (or AWS), you must define subnets before creating a Virtual Network. In this example we will create two subnets, one Gateway subnet (which needs to be named accordingly) where the VPN gateway will reside, and one subnet named \u2018default\u2019 where we will host VMs which will connect to GCP services over the private VPN connection."),(0,r.kt)("p",null,"Before defining the default subnet we must create and attach a Route Table (equivalent of a Route in GCP), this particular route will be used to route \u2018private\u2019 requests to services in GCP (such as Big Query)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'# define route table and route to GCP private access\n$azroutecfg = New-AzRouteConfig `\n  -Name "google-private" `\n  -AddressPrefix "199.36.153.4/30" `\n  -NextHopType "VirtualNetworkGateway" \n\n$azrttbl = New-AzRouteTable `\n  -ResourceGroupName "azure-to-gcp" `\n  -Name "google-private" `\n  -Location "Australia Southeast" `\n  -Route $azroutecfg\n\n# define gateway subnet\n$gatewaySubnet = New-AzVirtualNetworkSubnetConfig  `\n  -Name "GatewaySubnet" `\n  -AddressPrefix "10.1.2.0/24"\n\n# define default subnet\n$defaultSubnet  = New-AzVirtualNetworkSubnetConfig `\n  -Name "default" `\n  -AddressPrefix "10.1.1.0/24" `\n  -RouteTable $azrttbl\n\n# create virtual network and subnets\n$vnet = New-AzVirtualNetwork  `\n  -Name "azure-to-gcp-vnet" `\n  -ResourceGroupName "azure-to-gcp" `\n  -Location "Australia Southeast" `\n  -AddressPrefix "10.1.0.0/16" `\n  -Subnet $gatewaySubnet,$defaultSubnet\n')),(0,r.kt)("h2",{id:"step-4--create-network-security-groups-azure"},"Step 4 : Create Network Security Groups (Azure)"),(0,r.kt)("p",null,"Network Security Groups in Azure are stateful firewalls much like Firewall Rules in VPC networks in GCP. Like GCP, the lower priority overrides higher priority rules."),(0,r.kt)("p",null,"In the example we will create several rules to allow inbound ICMP, TCP and UDP traffic from our Google VPC and RDP traffic from the Internet (which we will use to logon to a VM in Azure to test private connectivity between the two clouds):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'# create network security group\n$rule1 = New-AzNetworkSecurityRuleConfig `\n  -Name rdp-rule `\n  -Description "Allow RDP" `\n  -Access Allow `\n  -Protocol Tcp `\n  -Direction Inbound `\n  -Priority 100 `\n  -SourceAddressPrefix Internet `\n  -SourcePortRange * `\n  -DestinationAddressPrefix * `\n  -DestinationPortRange 3389\n\n$rule2 = New-AzNetworkSecurityRuleConfig `\n  -Name icmp-rule `\n  -Description "Allow ICMP" `\n  -Access Allow `\n  -Protocol Icmp `\n  -Direction Inbound `\n  -Priority 101 `\n  -SourceAddressPrefix * `\n  -SourcePortRange * `\n  -DestinationAddressPrefix * `\n  -DestinationPortRange *\n\n$rule3 = New-AzNetworkSecurityRuleConfig `\n  -Name gcp-rule `\n  -Description "Allow GCP" `\n  -Access Allow `\n  -Protocol Tcp `\n  -Direction Inbound `\n  -Priority 102 `\n  -SourceAddressPrefix "10.2.0.0/16" `\n  -SourcePortRange * `\n  -DestinationAddressPrefix * `\n  -DestinationPortRange *\n\n$nsg = New-AzNetworkSecurityGroup `\n  -ResourceGroupName "azure-to-gcp" `\n  -Location "Australia Southeast" `\n  -Name "nsg-vm" `\n  -SecurityRules $rule1,$rule2,$rule3\n')),(0,r.kt)("h2",{id:"step-5--create-public-ip-addresses-azure"},"Step 5 : Create Public IP Addresses (Azure)"),(0,r.kt)("p",null,"We need to create two Public IP Address (equivalent of an External IP in GCP) which will be used for our VPN gateway and for the VM we will create:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'# create public IP address for VM\n$vmpip = New-AzPublicIpAddress `\n  -Name "vm-ip" `\n  -ResourceGroupName "azure-to-gcp" `\n  -Location "Australia Southeast" `\n  -AllocationMethod Dynamic\n\n# create public IP address for NW gateway \n$ngwpip = New-AzPublicIpAddress `\n  -Name "ngw-ip" `\n  -ResourceGroupName "azure-to-gcp" `\n  -Location "Australia Southeast" `\n  -AllocationMethod Dynamic\n')),(0,r.kt)("h2",{id:"step-6--create-virtual-network-gateway-azure"},"Step 6 : Create Virtual Network Gateway (Azure)"),(0,r.kt)("p",null,"The Virtual Network Gateway in Azure is the VPN Gateway equivalent in Azure which will be used to create a VPN tunnel between Azure and a GCP VPN Gateway. This gateway will be placed in the Gateway subnet created previously and one of the Public IP addresses created in the previous step will be assigned to this gateway."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'# create virtual network gateway\n$ngwipconfig = New-AzVirtualNetworkGatewayIpConfig `\n  -Name "ngw-ipconfig" `\n  -SubnetId $gatewaySubnet.Id `\n  -PublicIpAddressId $ngwpip.Id\n\n# use the AsJob switch as this is a long running process\n$job = New-AzVirtualNetworkGateway -Name "vnet-gateway" `\n  -ResourceGroupName "azure-to-gcp" `\n  -Location "Australia Southeast" `\n  -IpConfigurations $ngwipconfig `\n  -GatewayType "Vpn" `\n  -VpnType "RouteBased" `\n  -GatewaySku "VpnGw1" `\n  -VpnGatewayGeneration "Generation1" `\n  -AsJob\n\n$vnetgw = Get-AzVirtualNetworkGateway `\n  -Name "vnet-gateway" `\n  -ResourceGroupName "azure-to-gcp"\n')),(0,r.kt)("h2",{id:"step-7--create-a-vpc-network-and-subnetworks-gcp"},"Step 7 : Create a VPC Network and Subnetwork(s) (GCP)"),(0,r.kt)("p",null,"A VPC network and subnet need to be created in GCP, the subnet defines the VPC address space. This address space must not overlap with the Azure Virtual Network CIDR. For all GCP steps it is assumed that the project is set for client config (e.g. gcloud config set project ",(0,r.kt)("strong",{parentName:"p"},"your_project"),") so it does not need to be specified for each operation. Private Google access should be enabled on all subnets created."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'# creating VPC network and subnets\ngcloud compute networks create "azure-to-gcp-vpc" `\n  --subnet-mode=custom `\n  --bgp-routing-mode=regional\n\ngcloud compute networks subnets create "aus-subnet" `\n  --network  "azure-to-gcp-vpc" `\n  --range "10.2.1.0/24" `\n  --region "australia-southeast1" `\n  --enable-private-ip-google-access\n')),(0,r.kt)("h2",{id:"step-8--create-an-external-ip-gcp"},"Step 8 : Create an External IP (GCP)"),(0,r.kt)("p",null,"An external IP address will need to be created in GCP which will be used for the external facing interface of the VPN Gateway."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# create external IP\ngcloud compute addresses create "ext-gw-ip" `\n  --region "australia-southeast1"\n\n$gcp_ipaddr_obj = gcloud compute addresses describe "ext-gw-ip" `\n  --region "australia-southeast1" `\n  --format json | ConvertFrom-Json\n\n$gcp_ipaddr = $gcp_ipaddr_obj.address\n')),(0,r.kt)("h2",{id:"step-9--create-firewall-rules-gcp"},"Step 9 : Create Firewall Rules (GCP)"),(0,r.kt)("p",null,"VPC firewall rules will need to be created in GCP to allow VPN traffic as well as SSH traffic from the internet (which allows you to SSH into VM instances using Cloud Shell)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'# create VPN firewall rules\ngcloud compute firewall-rules create "vpn-rule1" `\n  --network "azure-to-gcp-vpc" `\n  --allow tcp,udp,icmp `\n  --source-ranges "10.1.0.0/16"\n\ngcloud compute firewall-rules create "ssh-rule1" `\n  --network "azure-to-gcp-vpc" `\n  --allow tcp:22\n')),(0,r.kt)("h2",{id:"step-10--create-vpn-gateway-and-forwarding-rules-gcp"},"Step 10 : Create VPN Gateway and Forwarding Rules (GCP)"),(0,r.kt)("p",null,"Create a VPN Gateway and Forwarding Rules in GCP which will be used to create a tunnel between GCP and Azure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'# create cloud VPN \ngcloud compute target-vpn-gateways create "vpn-gw" `\n  --network "azure-to-gcp-vpc" `\n  --region "australia-southeast1" `\n  --project "azure-to-gcp-project"\n\n# create forwarding rule ESP\ngcloud compute forwarding-rules create "fr-gw-name-esp" `\n  --ip-protocol ESP `\n  --address "ext-gw-ip" `\n  --target-vpn-gateway "vpn-gw" `\n  --region "australia-southeast1" `\n  --project "azure-to-gcp-project"\n\n# creating forwarding rule UDP500\ngcloud compute forwarding-rules create "fr-gw-name-udp500" `\n  --ip-protocol UDP `\n  --ports 500 `\n  --address "ext-gw-ip" `\n  --target-vpn-gateway "vpn-gw" `\n  --region "australia-southeast1" `\n  --project "azure-to-gcp-project"\n\n# creating forwarding rule UDP4500\ngcloud compute forwarding-rules create "fr-gw-name-udp4500" `\n  --ip-protocol UDP `\n  --ports 4500 `\n  --address "ext-gw-ip" `\n  --target-vpn-gateway "vpn-gw" `\n  --region "australia-southeast1" `\n  --project "azure-to-gcp-project"\n')),(0,r.kt)("h2",{id:"step-10--create-vpn-tunnel-gcp-side"},"Step 10 : Create VPN Tunnel (GCP Side)"),(0,r.kt)("p",null,"Now we will create the GCP side of our VPN tunnel using the Public IP Address of the Azure Virtual Network Gateway created in a previous step. As this example uses a route based VPN the traffic selector values need to be set at 0.0.0.0/0. A PSK (Pre Shared Key) needs to be supplied which will be the same key used when we configure a VPN Connection on the Azure side of the tunnel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'# get peer public IP address of Azure gateway\n$azpubip = Get-AzPublicIpAddress `\n  -Name "ngw-ip" `\n  -ResourceGroupName "azure-to-gcp"\n\n# create VPN tunnel \ngcloud compute vpn-tunnels create "vpn-tunnel-to-azure" `\n  --peer-address $azpubip.IpAddress `\n  --local-traffic-selector "0.0.0.0/0" `\n  --remote-traffic-selector "0.0.0.0/0" `\n  --ike-version 2 `\n  --shared-secret << Pre-Shared Key >> `\n  --target-vpn-gateway "vpn-gw" `\n  --region  "australia-southeast1" `\n  --project "azure-to-gcp-project"\n')),(0,r.kt)("h2",{id:"step-11--create-static-routes-gcp-side"},"Step 11 : Create Static Routes (GCP Side)"),(0,r.kt)("p",null,"As we are using static routing (as opposed to dynamic routing) we will need to define all of the specific routes on the GCP side. We will need to setup routes for both outgoing traffic to the Azure network as well as incoming traffic for the restricted Google API range (199.36.153.4/30)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'# create static route (VPN)\ngcloud compute routes create "route-to-azure" `\n  --destination-range "10.1.0.0/16" `\n  --next-hop-vpn-tunnel "vpn-tunnel-to-azure" `\n  --network "azure-to-gcp-vpc" `\n  --next-hop-vpn-tunnel-region "australia-southeast1" `\n  --project "azure-to-gcp-project"\n\n# create static route (Restricted APIs)\ngcloud compute routes create apis `\n  --network  "azure-to-gcp-vpc" `\n  --destination-range "199.36.153.4/30" `\n  --next-hop-gateway default-internet-gateway `\n  --project "azure-to-gcp-project"\n')),(0,r.kt)("h2",{id:"step-12--create-a-local-gateway-azure"},"Step 12 : Create a Local Gateway (Azure)"),(0,r.kt)("p",null,"A Local Gateway in Azure is an object that represents the remote gateway (GCP VPN gateway)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'# create local gateway\n$azlocalgw = New-AzLocalNetworkGateway `\n  -Name "local-gateway" `\n  -ResourceGroupName "azure-to-gcp" `\n  -Location "Australia Southeast" `\n  -GatewayIpAddress $gcp_ipaddr `\n  -AddressPrefix "10.2.0.0/16"\n')),(0,r.kt)("h2",{id:"step-13--create-a-vpn-connection-azure"},"Step 13 : Create a VPN Connection (Azure)"),(0,r.kt)("p",null,"Now we can setup the Azure side of the VPN Connection which is accomplished by associating the Azure Virtual Network Gateway with the Local Network Gateway. A PSK (Pre Shared Key) needs to be supplied which is the same key used for the GCP VPN Tunnel in step 10."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'# create connection\n$azvpnconn = New-AzVirtualNetworkGatewayConnection `\n  -Name "vpn-connection" `\n  -ResourceGroupName "azure-to-gcp" `\n  -VirtualNetworkGateway1 $vnetgw `\n  -LocalNetworkGateway2 $azlocalgw `\n  -Location "Australia Southeast" `\n  -ConnectionType IPsec `\n  -SharedKey  << Pre-Shared Key >>  `\n  -ConnectionProtocol "IKEv2"\n')),(0,r.kt)("p",null,"VPN Tunnel Established!"),(0,r.kt)("p",null,"At this stage we have created an end to end connection between the virtual networks in both clouds. You should see this reflected in the respective consoles in each provider."),(0,r.kt)(o.Z,{imageSrc:s(),altText:"GCP VPN Tunnel to a Azure Virtual Network",mdxType:"ImageWithCaption"}),(0,r.kt)(o.Z,{imageSrc:c(),altText:"Azure VPN Connection to a GCP VPC Network",mdxType:"ImageWithCaption"}),(0,r.kt)("p",null,"Congratulations! You have just setup a multi cloud environment using private networking. Now let\u2019s setup Google Private Access for Azure hosts and create VMs on each side to test our setup."),(0,r.kt)("h2",{id:"step-14--create-a-private-dns-zone-for-googleapiscom-azure"},"Step 14 : Create a Private DNS Zone for googleapis.com (Azure)"),(0,r.kt)("p",null,"We will now need to create a Private DNS zone in Azure for the googleapis.com domain which will host records to redirect Google API requests to the Restricted API range."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'# create private DNS zone\nNew-AzPrivateDnsZone `\n  -ResourceGroupName "azure-to-gcp" `\n  -Name "googleapis.com"\n\n# Add A Records   \n$Records = @()\n$Records += New-AzPrivateDnsRecordConfig `\n  -IPv4Address 199.36.153.4\n$Records += New-AzPrivateDnsRecordConfig `\n  -IPv4Address 199.36.153.5\n$Records += New-AzPrivateDnsRecordConfig `\n  -IPv4Address 199.36.153.6\n$Records += New-AzPrivateDnsRecordConfig `\n  -IPv4Address 199.36.153.7\n\nNew-AzPrivateDnsRecordSet `\n  -Name "restricted" `\n  -RecordType A `\n  -ResourceGroupName "azure-to-gcp" `\n  -TTL 300 `\n  -ZoneName "googleapis.com" `\n  -PrivateDnsRecords $Records\n\n# Add CNAME Records   \n$Records = @()\n$Records += New-AzPrivateDnsRecordConfig `\n  -Cname "restricted.googleapis.com."\n\nNew-AzPrivateDnsRecordSet `\n  -Name "*" `\n  -RecordType CNAME `\n  -ResourceGroupName "azure-to-gcp" `\n  -TTL 300 `\n  -ZoneName "googleapis.com" `\n  -PrivateDnsRecords $Records\n\n# Create VNet Link\nNew-AzPrivateDnsVirtualNetworkLink `\n  -ResourceGroupName "azure-to-gcp" `\n  -ZoneName "googleapis.com" `\n  -Name "dns-zone-link" `\n  -VirtualNetworkId $vnet.Id\n')),(0,r.kt)("h2",{id:"step-15--create-a-virtual-machine-azure"},"Step 15 : Create a Virtual Machine (Azure)"),(0,r.kt)("p",null,"We will create a VM in Azure which we can use to test the VPN tunnel as well as to test Private Google Access over our VPN tunnel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'# create VM\n$az_vmlocaladminpwd = ConvertTo-SecureString << Password Param >> `\n  -AsPlainText -Force\n$Credential = New-Object System.Management.Automation.PSCredential  ("LocalAdminUser", $az_vmlocaladminpwd);\n\n$nic = New-AzNetworkInterface `\n  -Name "vm-nic" `\n  -ResourceGroupName "azure-to-gcp" `\n  -Location "Australia Southeast" `\n  -SubnetId $defaultSubnet.Id `\n  -NetworkSecurityGroupId $nsg.Id `\n  -PublicIpAddressId $vmpip.Id `\n  -EnableAcceleratedNetworking `\n  -Force\n\n$VirtualMachine = New-AzVMConfig `\n  -VMName "windows-desktop" `\n  -VMSize "Standard_D4_v3"\n\n$VirtualMachine = Set-AzVMOperatingSystem `\n  -VM $VirtualMachine `\n  -Windows `\n  -ComputerName  "windows-desktop" `\n  -Credential $Credential `\n  -ProvisionVMAgent `\n  -EnableAutoUpdate\n\n$VirtualMachine = Add-AzVMNetworkInterface `\n  -VM $VirtualMachine `\n  -Id $nic.Id\n\n$VirtualMachine = Set-AzVMSourceImage `\n  -VM $VirtualMachine `\n  -PublisherName \'MicrosoftWindowsDesktop\' `\n  -Offer \'Windows-10\' `\n  -Skus \'rs5-pro\' `\n  -Version latest\n\nNew-AzVM `\n  -ResourceGroupName "azure-to-gcp" `\n  -Location "Australia Southeast" `\n  -VM $VirtualMachine `\n  -Verbose\n')),(0,r.kt)("h2",{id:"step-16--create-a-vm-instance-gcp"},"Step 16 : Create a VM Instance (GCP)"),(0,r.kt)("p",null,"We will create a Linux VM in GCP to test connectivity to hosts in Azure using the VPN tunnel we have established."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'# create VM instance\ngcloud compute instances create "gcp-instance" `\n  --zone "australia-southeast1-b" `\n  --machine-type "f1-micro" `\n  --subnet "aus-subnet" `\n  --network-tier PREMIUM `\n  --maintenance-policy MIGRATE `\n  --image=debian-9-stretch-v20200309 `\n  --image-project=debian-cloud `\n  --boot-disk-size 10GB `\n  --boot-disk-type pd-standard `\n  --boot-disk-device-name instance-1 `\n  --reservation-affinity any\n')),(0,r.kt)("h2",{id:"test-connectivity"},"Test Connectivity"),(0,r.kt)("p",null,"Now we are ready to test connectivity from both sides of the tunnel."),(0,r.kt)("h3",{id:"azure-to-gcp"},"Azure to GCP"),(0,r.kt)("p",null,"Establish a remote desktop (RDP) connection to the Azure VM created in Step 15. Ping the GCP VM instance using its private IP address."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(13743).Z},(0,r.kt)("img",{alt:"Test Private IP Connectivity from Azure to GCP",src:a(17911).Z,width:"1635",height:"967"}))),(0,r.kt)("h3",{id:"gcp-to-azure"},"GCP to Azure"),(0,r.kt)("p",null,"Now SSH into the GCP Linux VM instance and ping the Azure host using its private IP address."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(83102).Z},(0,r.kt)("img",{alt:"Test Private IP Connectivity from GCP to Azure",src:a(65311).Z,width:"902",height:"710"}))),(0,r.kt)("h2",{id:"test-private-google-access-from-azure"},"Test Private Google Access from Azure"),(0,r.kt)("p",null,"Now that we have established bi-directional connectivity between the two clouds, we can test private access to Google APIs from our Azure host. Follow the steps below to test private access:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"RDP into the Azure VM"),(0,r.kt)("li",{parentName:"ol"},"Install the Google Cloud SDK ( ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/"},"https://cloud.google.com/sdk/"),")"),(0,r.kt)("li",{parentName:"ol"},"Perform an ",(0,r.kt)("inlineCode",{parentName:"li"},"nslookup")," to ensure that calls to googleapis.com resolve to the restricted API range (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"nslookup storage.googleapis.com"),"). You should see a response showing the A records from the googleapis.com Private DNS Zone created in step 14."),(0,r.kt)("li",{parentName:"ol"},"Now test connectivity to Google APIs, for example to test access to Google Cloud Storage using ",(0,r.kt)("inlineCode",{parentName:"li"},"gsutil"),", or test access to Big Query using the ",(0,r.kt)("inlineCode",{parentName:"li"},"bq")," command")),(0,r.kt)("p",null,"Congratulations! You are now a multi cloud ninja!"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"if you have enjoyed this post, please consider ",(0,r.kt)("a",{parentName:"p",href:"https://www.buymeacoffee.com/jeffreyaven"},(0,r.kt)("strong",{parentName:"a"},"buying me a coffee \u2615"))," to help me keep writing!")))}h.isMDXComponent=!0},4729:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(67294);const r=e=>{let{imageSrc:t,altText:a}=e;return n.createElement("figure",null,n.createElement("a",{href:t},n.createElement("img",{src:t,alt:a})),n.createElement("figcaption",{className:"figure-caption"},a))}},68501:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/azure-vpn-to-gcp.3b8e766.1045.png 1045w",images:[{path:a.p+"assets/ideal-img/azure-vpn-to-gcp.3b8e766.1045.png",width:1045,height:776}],src:a.p+"assets/ideal-img/azure-vpn-to-gcp.3b8e766.1045.png",toString:function(){return a.p+"assets/ideal-img/azure-vpn-to-gcp.3b8e766.1045.png"},placeholder:void 0,width:1045,height:776},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAo0lEQVQImWWMsQ6CMBRF+/9fokYGU3Aj7gqLGmPUOBLkWWgLVNK+vhogcfFMZzj3sg2PebLdH/Isy4+nc5ruFsvVOoo450nM2eX2uN6fIGpR11LKCqAoirIsASoAYLLtHOIgmu71DhOI6BzOzrRSiDj0phENIgaiwbpK9tb5QMS01mOOvv1YdEhE3pN16InGtdKttXa++ocppY0xIQSa8pmffQGhvMQQpZdvCQAAAABJRU5ErkJggg=="}},35647:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/gcp-vpn-to-azure.8b8a87b.1649.png 1649w",images:[{path:a.p+"assets/ideal-img/gcp-vpn-to-azure.8b8a87b.1649.png",width:1649,height:479}],src:a.p+"assets/ideal-img/gcp-vpn-to-azure.8b8a87b.1649.png",toString:function(){return a.p+"assets/ideal-img/gcp-vpn-to-azure.8b8a87b.1649.png"},placeholder:void 0,width:1649,height:479},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAIAAAAlXwkiAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAX0lEQVQImQXBxw2AIBQAUPafRi+WuIAegMQNLAf4hWKJGqL4nmgU1hLKAYoeaoWtpm50lXaV5kYaseBpY4It8fHG69ue7Pfk9xSuHO8sgufgmdAiGLSGmXCdaZmYwBH8OKBQe+HvVsUAAAAASUVORK5CYII="}},3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),g=r,w=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return a?n.createElement(w,i(i({ref:t},u),{},{components:a})):n.createElement(w,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13743:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/files/azure-ping-to-gcp-14a9b0e446b7c868ffa27ba3435460be.png"},83102:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/files/gcp-ping-to-azure-94b9a33840b54870af540853cda825e9.png"},60051:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/files/gcp-to-azure-vpn-design-f59e466042c5e6fdf12abc497dde73bd.png"},17911:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/azure-ping-to-gcp-14a9b0e446b7c868ffa27ba3435460be.png"},65311:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/gcp-ping-to-azure-94b9a33840b54870af540853cda825e9.png"},31015:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/gcp-to-azure-vpn-design-f59e466042c5e6fdf12abc497dde73bd.png"}}]);