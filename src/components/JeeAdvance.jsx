import React, { useEffect, useState } from 'react'
import  {useFormik} from 'formik';
import * as Yup from 'yup'
import axios from "axios"
import config from '../institutes.json'
import { Formik, Form, Field, ErrorMessage } from 'formik';

function JeeAdvance() {

const [filteredData, setFilteredData] = useState([]);

  const validate = Yup.object().shape({
    gender: Yup.string()
    .required("Required")
    .oneOf(['Male', 'Female'], 'Invalid category selected'),
    seattype: Yup.string()
    .required("Required")
    .oneOf(['Open', 'OBC-NCL', 'ST', 'SC']),
    pwd: Yup.string()
    .min(1, 'At least one option must be selected')
    .required('Required'),
    jeerank: Yup.number()
    .required("Rank is required")
    .min(100, 'You have to atleast put 100 above number')
    .typeError('Jee Rank be a number')

  })

  
//   const { values, handleBlur, handleChange, handleSubmit} = useFormik({
//     initialValues: {
//       gender: "",
//       seattype: "",
//       pwd: "",
//       jeerank: "" 
//       },
//       enableReinitialize: true,
//       onSubmit: async (values) => {
//        // alert(JSON.stringify(values, null, 2));
//        console.log(values) 
//       },
//       //validationSchema: validate,
//   });

const validationSchema = Yup.object({
    jeeRank: Yup.number().required('JEE Rank is required'),
    gender: Yup.string().required('Gender is required'),
    seatType: Yup.string().required('Seat Type is required'),
    pwdStatus: Yup.string().required('PWD Status is required'),
  });

    const   onSubmit = async (values) => {
        try {
          // Fetch data from FastAPI backend
          const response = await axios.get('https://127.0.0.1:8000/instituts');
          const jsonData = response.data;
    
          console.log('Fetched Data:', jsonData); // Log fetched data
    
          // Filter the JSON data based on form inputs
          const result = jsonData.filter((item) => {
            return (
              item.gender === values.gender &&
              item.seat_type === values.seatType &&
              (values.pwdStatus === 'No' || item.pwd === values.pwdStatus) &&
              values.jeeRank >= item.opening_rank &&
              values.jeeRank <= item.closing_rank
            );
          });
    
          console.log('Filtered Data:', result); // Log filtered data
          setFilteredData(result);
        } catch (error) {
          console.error('Error fetching or filtering data:', error);
        }
      
      }
 
  return (
    <div>
  

    <div class="container">
        <h2 class="py-3 text-center">JEE Advance</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        
        <div class="row py-3">
        <form  onSubmit={onSubmit}
          onChange={formik.handleChange} >
        {/* onSumit={handleSubmit} */}
            <div class="col-md-6 ">
                {/* <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control"></input>
                </div> */}
              
                <div class="form-group mb-3 ">
                    <label >Gender</label>
                    <select class="form-control" name="gender"
                     
                     > 
                        <option value="Select Gender" >Select Gender</option>
                        <option value="Male">MALE</option>
                        <option value="Female">Female</option>
                    </select>
                    <ErrorMessage name="gender" component="div" />
                </div>
                <div class="form-group mb-3">
                    <label>Seat Type</label>
                    <select class="form-control" 
                   name="seattype" 
                    > 
                        <option value="Select SeatType">Select Seat Type</option>
                        <option value="Open">Open</option>
                        <option value="OBC-NCL">OBC-NCL</option>
                        <option value="ST">ST</option>
                        <option value="SC">SC</option>
                    </select>
                    <ErrorMessage name="seatType" component="div" />
               
                </div>
                <div class="form-group mb-3">
                <input type="checkbox" 
                name="pwd" 
                
                class="form-check-input" id="pwdStatus"></input>
                   <label class="form-check-label" for="pwdStatus">Person with Disability (PWD)</label>
                  <ErrorMessage name="pwd" component="div" />
                </div>

                <div class="form-group mb-3">
                <label>JEE Rank</label>
                    <input type="number"
                     

                     name="jeerank" 
                     class="form-control"></input>
                    <ErrorMessage name="jeerank" component="div" />  
                </div>

                <button type='submit' class="btn btn-primary mt-3">Submit</button>

                </div>
                </form>
            </div>
        </Formik>
            
            </div>
                 {/* Display the filtered results */}
      {filteredData.length > 0 ? (
        <div>
          <h3>Filtered Colleges:</h3>
          <ul>
            {filteredData.map((college) => (
              <li key={college.id}>
                {college.institute_name} - {college.program_name} (Rank Range: {college.opening_rank} - {college.closing_rank})
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No colleges found matching your criteria.</p>
      )}
    </div>

    
  )
}

export default JeeAdvance
