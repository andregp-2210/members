import React, { useContext } from 'react';
import { AppContext } from '../../../Context';

import { TableContainer, Table } from './styles';

const MembersList = () => {
  const { members } = useContext(AppContext);

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>SSN</th>
          </tr>
        </thead>
        <tbody>
          {members.map(({ firstName, lastName, address, ssn }) => (
            <tr key={ssn}>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{address}</td>
              <td>{ssn}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default MembersList;
