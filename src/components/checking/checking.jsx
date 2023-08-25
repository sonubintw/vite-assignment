import React, { useState } from 'react';
import { TreeView, TreeItem } from '@mui/lab';
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const departmentData = [
  {
    "department": "customer_service",
    "sub_departments": [
      "support",
      "customer_success"
    ]
  },
  {
    "department": "design",
    "sub_departments": [
      "graphic_design",
      "product_design",
      "web_design"
    ]
  }
];

const Checking = () => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (value, subDepartments) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      newChecked.push(...subDepartments);
    } else {
      newChecked.splice(currentIndex, 1);
      newChecked.splice(newChecked.indexOf(subDepartments), subDepartments.length);
      console.log(newChecked)
    }

    setChecked(newChecked);
  };

  const isDepartmentChecked = (department, subDepartments) => {
    return subDepartments.every((subDept) => checked.includes(subDept)) && checked.includes(department);
  };

  const renderSubDepartments = (subDepartments, department) => {
    return subDepartments.map((subDept) => (
      <TreeItem
        key={subDept}
        nodeId={subDept}
        label={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
              checked={checked.includes(subDept)}
              onChange={handleToggle(subDept, [])}
            />
            {subDept}
          </div>
        }
      />
    ));
  };

  const renderDepartments = (data) => {
    return data.map((dept) => (
      <TreeItem
        key={dept.department}
        nodeId={dept.department}
        label={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
              checked={isDepartmentChecked(dept.department, dept.sub_departments)}
              onChange={handleToggle(dept.department, dept.sub_departments)}
            />
            {dept.department}
          </div>
        }
      >
        {renderSubDepartments(dept.sub_departments, dept.department)}
      </TreeItem>
    ));
  };

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderDepartments(departmentData)}
    </TreeView>
  );
};

export default Checking;
