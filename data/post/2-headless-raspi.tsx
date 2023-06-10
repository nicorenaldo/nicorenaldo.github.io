import { ImageCaption } from '@/components/Common/ImageCaption';
import { Body, Title } from '@/components/Common/Text';
import Image from 'next/image';

import puttyExample from '@/public/images/blog/2-putty-example.webp';
import puttyTerminal from '@/public/images/blog/2-putty-terminal.webp';
import banner from '@/public/images/blog/2-raspi-banner.webp';
import imagerChoose from '@/public/images/blog/2-raspi-imager-choose.webp';
import initialMenu from '@/public/images/blog/2-raspi-imager-menu.webp';
import saveAllFile from '@/public/images/blog/2-save-allfiles.webp';

const HeadlessRaspi = (
  <>
    <Image src={banner} alt='headless-raspi' />

    <Body className='font-bold'>
      This article covers setting up the Raspberry Pi 3 Model B+ for headless
      SSH access over WiFi using Windows 10.
    </Body>

    <Title>Step 1. Download and Installing Raspbian</Title>
    <Body>
      One of the key thing to start your raspberry pi project is the OS, there
      are several choices you can take such as Windows or Linux Ubuntu, one of
      the most general choice for raspberry pi is the Raspberry Pi OS
      (previously called Raspbian).
    </Body>
    <Body>
      Once you have your microSD Card (atleast 8GB) and raspberry pi ready, use
      the following steps to set up your Raspberry Pi using a Windows, Mac or
      Linux-based PC (I tried this on Windows, but it should be the same on all
      three).
    </Body>

    <ol className='pl-8 list-decimal'>
      <li>Insert a microSD card / reader into your computer.</li>
      <li>
        Download and install the{' '}
        <a
          href='https://www.raspberrypi.org/downloads/'
          className='font-bold underline'
          aria-label='Raspberry Pi Official'
        >
          official Raspberry Pi Imager
        </a>{' '}
        through the official website.
      </li>
      <li>
        Click Choose OS and select Raspbian from the OS menu (there are other
        choices, we are going to use the latest Raspbian OS). The process could
        take a while since you need to download the OS image too (around 1 hour
        for me).
      </li>
    </ol>
    <ImageCaption
      className=''
      caption='Initial Main Menu of the Imager'
      img={<Image src={initialMenu} alt='' />}
    />

    <ImageCaption
      className=''
      caption='Choose the Latest Raspbian Version'
      img={<Image src={imagerChoose} alt='' />}
    />

    <ol className='pl-8 list-decimal'>
      <li>Choose the microSD Card and pick the one you are using</li>
      <li>
        Click Write. The app will now take a few minutes to download the OS and
        write to your card.
      </li>
    </ol>

    <Title>Step 2. Setting Up Wireless Network</Title>
    <Body>
      If you want to use Raspberry Pi headless, you need to give the initial
      WiFi settings manually through the microSD Card. If you have successfully
      installed the Raspberry Pi OS, by inserting it to your Laptop or PC, you
      should see the boot folder available. We are going to add some new
      configuration on that boot folder.
    </Body>
    <ol className='pl-8 list-decimal'>
      <li>
        Open up a new blank notepad, we are going to write a code that pass the
        WiFi SSID and password to the boot program.
      </li>
      <li>
        A common wpa_supplicant.conf file would look like this. Copy the
        following code and change the SSID and password to your current WiFi.
      </li>
      <Body className=' whitespace-pre'>
        {`\ncountry=US\nctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\nupdate_config=1\nnetwork={\n\t\tssid = "YOUR SSID"\n\t\tpsk="PASSWORD"\n}\n
                `}
      </Body>
      <li>
        Save the file with the name “wpa_supplicant.conf” , make sure you save
        the file with type “All Files (.)” and not .txt file.
      </li>

      <ImageCaption
        className=''
        caption='Choose the Latest Raspbian Version'
        img={<Image src={saveAllFile} alt='' />}
      />

      <li>
        Lastly, put the saved file to the boot folder on the microSD, the file
        will be read and deleted after the raspberry pi next boot up.
      </li>
    </ol>

    <Title>Step 3. Setting Up SSH</Title>
    <Body>
      For security reason, SSH are usually not enabled on new Raspberry Pi. To
      change the setting, you can easily enable it by creating a blank file
      named “ssh” and put it on the boot folder again. You can create the file
      with notepad by following this instructions :
    </Body>
    <ol className='pl-8 list-decimal'>
      <li>Open up a blank new notepadOpen up a blank new notepad</li>
      <li>
        Save the file using the save as command (you can keep the file empty),
        give the file name “ssh”.
      </li>
      <li>Make sure you are saving the file without the .txt extention.</li>
      <li>Put the “ssh” file on the boot folder.</li>
    </ol>
    <Body>
      If you have finished step 1 through 3, you can start booting up your
      Raspberry Pi by inserting the microSD Card to Raspberry Pi and plug in the
      5V adapter.
    </Body>

    <Title>Step 4. Establishing a Connection</Title>
    <Body>
      To start a SSH connection, you had to know it's local IP address first,
      you can get it easily by using a third-party IP scanner application. There
      is{' '}
      <a
        href='https://play.google.com/store/apps/details?id=com.overlook.android.fing&hl=in&gl=US'
        className='font-bold underline'
      >
        Fing
      </a>{' '}
      for smartphone, and there's{' '}
      <a
        href='https://angryip.org/download/#windows'
        className='font-bold underline'
      >
        Angry IP Scanner
      </a>{' '}
      for Windows, Mac, and also Linux.
    </Body>
    <Body>
      After installing the IP scanner, use your preferred scanner and find the
      Raspberry Pi local IP address (make sure you are using the same network as
      the Raspi). You can identify it from the hostname listed, usually you will
      find name such as “Raspberry Pi” or something similar.
    </Body>
    <Body>
      After you found the Raspi IP address, you can start making a SSH
      connection by using external application. I use{' '}
      <a href='https://www.putty.org/' className='font-bold underline'>
        PuTTY
      </a>{' '}
      as one of the most popular app for Raspberry Pi Prototyping. To start the
      connection, you only had to fill the IP address field and left everything
      to default, and click Open to start the connection.
    </Body>

    <ImageCaption
      className=''
      caption='Example of PuTTY Interface'
      img={<Image src={puttyExample} alt='' />}
    />

    <Body>
      A new terminal will pop up, asking for credential and password. The
      default username and password can be seen below. If your terminal looked
      like the image below, that means the connection is successfully
      established and you can start making your project.
    </Body>
    <Body className='whitespace-pre'>
      {'username: pi\npassword: raspberry'}
    </Body>

    <ImageCaption
      className=''
      caption='Example of PuTTY Terminal Interface'
      img={<Image src={puttyTerminal} alt='' />}
    />

    <Body>
      There you go, your brand new Raspberry Pi is ready to go and you can start
      making your awesome project. I hope this guide will be helpful to
      everyone. Keep on tinkering!!!
    </Body>
  </>
);

export default HeadlessRaspi;
