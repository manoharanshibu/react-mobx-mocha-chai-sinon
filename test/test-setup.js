/* eslint-disable no-undef, global-require */
const chaiEnzyme = require('chai-enzyme');
import sinonChai from 'sinon-chai';
import * as enzyme from 'enzyme';
import sinon from 'sinon';
import chai from 'chai';

//
// Enzyme
//
global.enzyme = enzyme;
global.shallow = enzyme.shallow;
global.render = enzyme.render;
global.mount = enzyme.mount;

//
// Chai/Sinon
//
global.expect = chai.expect;
global.sinon = sinon;

chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.should()
