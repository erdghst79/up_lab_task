import React, { Fragment } from 'react';
import { Button, FormGroup, UncontrolledTooltip, Label } from 'reactstrap';
import { DATE_FORMAT } from 'constants/date';
import DueDate from './DueDate';

const TodoItem = (props) => {
  const { message, dueDate, open, _id, onChange, onRemove } = props;
  return (
    <tr>
      <td width="30">
        <FormGroup check>
          <Label check>
            <input checked={!open} onChange={onChange} type="checkbox" />
            <span className="form-check-sign">
              <span className="check" />
            </span>
          </Label>
        </FormGroup>
      </td>
      <td>
        <p className="title">{message}</p>
      </td>
      <td className="text-right">
        <span>{dueDate ? <DueDate date={dueDate} format={DATE_FORMAT} /> : null}</span>
        {typeof onRemove === 'function' ? (
          <>
            <Button color="link" id={`tooltip_remove_${_id}`} title="" type="button" onClick={onRemove}>
              <i className="tim-icons icon-trash-simple" />
            </Button>
            <UncontrolledTooltip delay={0} target={`tooltip_remove_${_id}`} placement="right">
              Remove Task
            </UncontrolledTooltip>
          </>
        ) : null}
      </td>
    </tr>
  );
};

export default TodoItem;
