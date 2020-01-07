import React from "react";
import { Global, css, styled } from "frontity";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import tabsCss from 'react-tabs/style/react-tabs.css';
import { MdFormatColorText, MdOndemandVideo, MdCode, MdFileDownload } from 'react-icons/md';

export class PostTabs extends React.Component {

  render() {
    const { html, post } = this.props;
    const Html2React = html;
    const content = post.content.rendered;
    const codeIframe = `<div style="margin-top: 40px;">${post.acf.code_iframe}</div>`;
    const codeZIP = post.acf.code_zip;
    const video = `<iframe width="100%" height="450" style="margin-top: 40px;" src="https://www.youtube-nocookie.com/embed/${post.acf.video_id}?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    const StyledButton = styled.button`
      background: #F8931F;
      padding: 5px 10px;
      border-radius: 50px;
      color: #fff;
      cursor: pointer;
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    const downloadZip = () => {
      window.location.href = codeZIP;
    }

    return (
      <Tabs>
        <Global styles={ css(tabsCss) } />
        <TabList>
          <Tab><MdFormatColorText /></Tab>
          <Tab><MdOndemandVideo /></Tab>
          <Tab><MdCode /></Tab>
        </TabList>
        <TabPanel>
          <Html2React html={content} />
        </TabPanel>
        <TabPanel>
          { video && <Html2React html={video} /> }
        </TabPanel>
        <TabPanel>
          { codeIframe && <Html2React html={codeIframe} /> }
          { codeZIP && <StyledButton onClick={downloadZip}><MdFileDownload /> Descargar código</StyledButton> }
        </TabPanel>
      </Tabs>
    );
  }
}