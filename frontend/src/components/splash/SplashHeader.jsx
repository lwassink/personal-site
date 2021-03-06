import React from 'react';
import Link from 'react-router-dom/Link';
import { PDFTag } from '../tags/LabelTags';

export default () => (
  <div className="splash-section splash-header">
    <img src="/assets/images/luke-wassink-headshot.jpg" />
    <h1>Luke&nbsp;Wassink</h1>
    <h3>Software developer, Ph.D. Mathematics</h3>
    <PDFTag
    label="R&eacute;sum&eacute;"
    url="/assets/luke-wassink-resume.pdf"
    />
    <PDFTag
    label="Doctoral thesis"
    url="/assets/luke-wassink-thesis.pdf"
    />
  </div>
)
