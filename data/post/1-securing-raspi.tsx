import { ImageCaption } from '@/components/Common/ImageCaption';
import { Body, SubHeading, Title } from '@/components/Common/Text';
import Image from 'next/image';

import openVPN from '@/public/images/blog/1-openvpn-raspi.webp';
import terminalIfConfig from '@/public/images/blog/1-terminal-raspi-ifconfig.webp';
import terminalVPN from '@/public/images/blog/1-terminal-raspi-vpn.webp';

const SecuringRaspi = (
  <>
    <Image src={openVPN} alt='' />

    <Body>
      When you are making IoT project using Raspi, you may found yourself ended
      up using public WiFi for Raspi's internet connection. While this may grant
      you internet for your raspi, this connection may not be as secure as you
      think, amateur hackers can see everything you do online with simple tools
      like Packet Sniffers. Luckily we can mitigate these threats by setting up
      a VPN connection on the Raspi.
    </Body>
    <Body>
      What a VPN does basically, is creating a safe tunnel to the VPN server.
      This will make your transferred data harder to sniff, and also grant your
      PC/Laptop connected to the VPN, a local network connection with the raspi,
      thus enabling SSH connection to the raspi. I will show you how to give
      your raspi access to OpenVPN, the entire process would only take 5-15
      minutes.
    </Body>

    <Title>Installation</Title>
    <Body>
      For this tutorial, you only need to install OpenVPN on Raspi. Before you
      begin it would be wise to ensure your software is up to date.
    </Body>
    <div>
      <Body className='font-bold'>sudo apt-get update</Body>
      <Body className='font-bold'>sudo apt-get upgrade</Body>
    </div>
    <Body>You can install openvpn by writing this line of code.</Body>
    <Body className='font-bold'>sudo apt-get install openvpn</Body>

    <Title>Usage</Title>
    <Body>
      For connecting your raspi (as client) to the VPN server, what you need is
      the .ovpn files generated from the server itself. For this experiment I
      was using a private VPN server so I can't share the file for this
      tutorial, but you can find some public VPN server from{' '}
      <a
        href='https://www.freeopenvpn.org/en/'
        className='font-bold underline'
        aria-label='OpenVPN'
      >
        this website
      </a>{' '}
      or{' '}
      <a
        href='https://www.vpngate.net/en/'
        className='font-bold underline'
        aria-label='VPN Gate'
      >
        here
      </a>
      .
    </Body>
    <Body>
      After you got your .ovpn files (on your pc / laptop), you need to transfer
      the file either by using{' '}
      <a
        href='https://pimylifeup.com/raspberry-pi-ftp/'
        className='font-bold underline'
        aria-label='FileZilla'
      >
        FTP over FileZilla
      </a>{' '}
      or you can download it directly using your raspi. After that you need to
      move the .ovpn files to the address :
    </Body>
    <Body className='font-bold'>sudo openvpn example.ovpn</Body>

    <Body>
      After you got the file, all you need to do is run the openvpn program,
      also change the file name to the matching file's name :
    </Body>
    <Body>
      If all works well, you should see the line of “Initialization Sequence
      Complete” which indicates the program has finished. You can check the
      connection and your new IP address to the VPN server by writing this
      command on a new command window:
    </Body>
    <div>
      <Body className='font-bold'>{'> ifconfig'}</Body>
      <Body className='font-bold'>{'> route'}</Body>
    </div>

    <Body>
      The results would show a tun0 parameter that indicates your new IP address
      on the VPN network, you can compare it by stopping the VPN program and
      check the `ifconfig` command again. You can see the example result on the
      image below, my new IP address on the VPN network would be 10.70.132.2 and
      the route command will show you the IP address of the VPN server.
    </Body>

    <Image src={terminalIfConfig} alt='' />
    <Body>
      Since our raspi is connected, now you can do a SSH connection to your
      raspi from a different network, through the VPN, how great is that right ?
      You can see the example below of how I monitored the Raspi using the it's
      IP address on the VPN Network (the IP on tun0 parameter, 10.70.132.2)
    </Body>

    <ImageCaption
      className='w-fit'
      caption='Raspberry Pi Terminal showing new IP Address connected to the VPN'
      img={<Image src={terminalVPN} alt='' />}
    />

    <SubHeading>Conclusion</SubHeading>
    <Body>
      Tadaa!!! Your Raspberry Pi is successfully connected through the VPN and
      can be accessed by SSH or FTP from device with same VPN network. Your next
      things to do is making sure the OpenVPN will run on boot up, but that's
      gonna be on another story.
    </Body>

    <Body>
      Published by Nico Renaldo at Widya Imersif on February 11, 2021.
    </Body>
  </>
);

export default SecuringRaspi;
