import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Col, Row, Input, InputNumber } from 'antd';
import 'antd/lib/date-picker/style';
import { getFieldConfig } from '../../utils/configUtils';
import shallowCompare from 'react-addons-shallow-compare';

export default class IPRange extends Component {

  state = {
  }

  static propTypes = {
    setValue: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    placeholders: PropTypes.array,
    textSeparator: PropTypes.string,
    config: PropTypes.object.isRequired,
    field: PropTypes.string.isRequired,
    value: PropTypes.array,
    defaultValues: PropTypes.array, // TODO: Support default values
    customProps: PropTypes.object,
  };

  shouldComponentUpdate = shallowCompare;

  handleChange = (value) => {
    this.props.setValue(value);
  }

  handleChangeIpNum = (ipNum) => {
    let value = this.props.value || [undefined, undefined];
    value = [...value];
    value[0] = ipNum.target.value;
    
    this.props.setValue(value);
  }
  
  handleChangeCIDR = (cidrNum) => {
    let value = this.props.value || [undefined, undefined];
    value = [...value];
    value[1] = cidrNum;
    
    this.props.setValue(value);
  }

  static defaultProps = {
    defaultValues: [null, 32]
  };

  render() {
    const fieldDefinition = getFieldConfig(this.props.field, this.props.config);
    const fieldSettings = fieldDefinition.fieldSettings || {};
    const customProps = this.props.customProps || {};

    let value = this.props.value != undefined ? this.props.value : undefined;
    let [ipNum, cidrNum] = value || [null, null];
    const [placeholder1, placeholder2] = this.props.placeholders || this.props.valueLabels || [];
    const [defaultVal1, defaultVal2] = this.props.defaultValues || [];

    // If default value exists & now original value
    // TODO: Need to do the same with IP default value
    if (cidrNum === undefined && defaultVal2 !== undefined) {
      this.handleChangeCIDR(defaultVal2);
    }

    const inputStyleOverride = {
      border: 'none',
      height: '100%',
      minWidth: '120px'
    }

    return (
      <Col style={{display: 'inline-flex', alignItems: 'center', border: '1px solid #d9d9d9', borderRadius: '4px'}}>
        <div style={{ marginRight: '5px'}}>
          <Input
            size={this.props.config.settings.renderSize || "small"}
            ref="ipNum"
            key="ipNum"
            value={ipNum || defaultVal1}
            placeholder={placeholder1}
            onChange={this.handleChangeIpNum}
            style={inputStyleOverride}
            {...customProps}
          />
        </div>
        <div style={{ marginRight: '5px', lineHeight: '20px'}}>
          <span>{ this.props.textSeparator }</span>
        </div>
        <div style={{ marginRight: '5px'}}>
          <InputNumber
            size={this.props.config.settings.renderSize || "small"}
            ref="cidr"
            key="cidr"
            min={0}
            max={32}
            step={1}
            width={50}
            value={cidrNum || defaultVal2}
            placeholder={placeholder2}
            onChange={this.handleChangeCIDR}
            className={'small-input'}
            style={{...inputStyleOverride, minWidth: '60px'}}
            {...customProps}
          />
        </div>
      </Col>
    );
  }
}