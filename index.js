// // //correct code
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const sql = require('mssql/msnodesqlv8');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());      

// // // Database configuration
// // const config = {
// //   server: 'RAJDEEP-PC\\SQLEXPRESS',
// //   database: 'DevData1',
// //   driver: 'msnodesqlv8',
// //   options: {
// //     trustedConnection: true,
// //   },
// // };

// const config = {
//   user: 'Well1',
//   password: 'well228608',
//   server: 'sanghinstance.chasw9cgenor.ap-south-1.rds.amazonaws.com,1857',
//   database: 'DevData1',
//   driver: 'msnodesqlv8',
//   options: {
//     trustedConnection: false,
//   },
// };

// // Connect to the database
// sql.connect(config, (err) => {
//   if (err) {
//     console.log('Database connection failed:', err);
//   } else {
//     console.log('Connected to the database');
//   }
// });

// // Start the server

// const PORT = process.env.PORT || 8090;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// // Define API endpoints

// //create admin 
// app.post('/api/login', (req, res) => {
//   const { username, password } = req.body;

//   // Validate input (optional, depending on your requirements)

//   const query = `
//     SELECT * FROM Users
//     WHERE UserName = '${username}' AND Password = '${password}'
//   `;

//   sql.query(query, (err, result) => {
//     if (err) {
//       console.log('Error:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       if (result.recordset.length > 0) {
//         res.json({ message: 'Login successful' });
//       } else {
//         res.status(401).json({ error: 'Invalid credentials' });
//       }
//     }
//   });
// });

//   app.post('/api/users', (req, res) => {
//     const {
//       username,
//       password,
//       isAdmin,
//       allowMasterAdd,
//       allowMasterEdit,
//       allowMasterDelete,
//       allowEntryAdd,
//       allowEntryEdit,
//       allowEntryDelete,
//       allowBackdatedEntry,
//       passwordHint,
//     } = req.body;

//     const query = `
//       INSERT INTO Users (
//         UserName,
//         Password,
//         Administrator,
//         AllowMasterAdd,
//         AllowMasterEdit,
//         AllowMasterDelete,
//         AllowEntryAdd,
//         AllowEntryEdit,
//         AllowEntryDelete,
//         AllowBackdatedEntry,
//         Passwordhint
//       )
//       VALUES (
//         '${username}',
//         '${password}',
//         ${isAdmin ? 1 : 0},
//         ${allowMasterAdd ? 1 : 0},
//         ${allowMasterEdit ? 1 : 0},
//         ${allowMasterDelete ? 1 : 0},
//         ${allowEntryAdd ? 1 : 0},
//         ${allowEntryEdit ? 1 : 0},
//         ${allowEntryDelete ? 1 : 0},
//         ${allowBackdatedEntry ? 1 : 0},
//         '${passwordHint}'
//       )
//     `;

//     sql.query(query, (err) => {
//       if (err) {
//         console.log('Error:', err);
//         res.status(500).json({ error: 'Internal server error' });
//       } else {
//         res.json({ message: 'User created successfully' });
//       }
//     });
//   });

//   app.get('/api/getusers', (req, res) => {
//     const query = `SELECT * FROM Users`;
  
//     sql.query(query, (err, result) => {
//       if (err) {
//         console.log('Error:', err);
//         res.status(500).json({ error: 'Internal server error' });
//       } else {
//         res.json(result.recordset);
//       }
//     });
//   });
  
//   // Example endpoint: Update an existing item
// app.put('/api/updateUser/:username', (req, res) => {
//   const { username } = req.params;
//   const { 
//     password, 
//     isAdmin,
//     allowMasterAdd,
//     allowMasterEdit,
//     allowMasterDelete,
//     allowEntryAdd,
//     allowEntryEdit,
//     allowEntryDelete,
//     allowBackdatedEntry,
//     passwordHint } = req.body;

//   const query = `UPDATE Users SET  Password='${password}', Administrator=${isAdmin ? 1 : 0}, AllowMasterAdd=${allowMasterAdd ? 1 : 0}, AllowMasterEdit=${allowMasterEdit ? 1 : 0}, AllowMasterDelete=${allowMasterDelete ? 1 : 0}, AllowEntryAdd=${allowEntryAdd ? 1 : 0}, AllowEntryEdit=${allowEntryEdit ? 1 : 0}, AllowEntryDelete=${allowEntryDelete ? 1 : 0}, AllowBackdatedEntry=${allowBackdatedEntry ? 1 : 0},Passwordhint='${passwordHint}' WHERE UserName ='${username}'`;
//   sql.query(query, (err) => {
//     if (err) {
//       console.log('Error:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       res.json({ message: 'Item updated successfully' });
//     }
//   });
// });

//   app.delete('/api/deleteUser/:UserName', (req, res) => {
//     const { UserName } = req.params;
//     const query = `DELETE FROM Users WHERE UserName = '${UserName}'`;
//     sql.query(query, (err) => {
//       if (err) {
//         console.log('Error:', err);
//         res.status(500).json({ error: 'Internal server error' });
//       } else {
//         res.json({ message: 'Item deleted successfully' });
//       }
//     });
//   });


// //roommaster

// //Example endpoint: Get all items
// app.get('/api/items', (req, res) => {
//   const query = 'SELECT * FROM RoomMaster';
//   sql.query(query, (err, result) => {
//     if (err) {
//       console.log('Error:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       res.json(result.recordset);
//     }
//   });
// });

// // Example endpoint: Create a new item
// app.post('/api/items', (req, res) => {
//   const { RoomNo, RoomTypeCode, RoomFare, RoomDescription, Remark1 } = req.body;
//   const query = `INSERT INTO RoomMaster (RoomNo, RoomTypeCode, RoomFare, RoomDescription, Remark1) VALUES ('${RoomNo}', '${RoomTypeCode}', ${RoomFare}, '${RoomDescription}', '${Remark1}')`;
//   sql.query(query, (err) => {
//     if (err) {
//       console.log('Error:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       res.json({ message: 'Item created successfully' });
//     }
//   });
// });

// // Example endpoint: Update an existing item
// app.put('/api/items/:Id', (req, res) => {
//   const { Id } = req.params;
//   const { RoomNo, RoomTypeCode, RoomFare, RoomDescription, Remark1 } = req.body;
//   const query = `UPDATE RoomMaster SET RoomNo='${RoomNo}', RoomTypeCode='${RoomTypeCode}', RoomFare=${RoomFare}, RoomDescription='${RoomDescription}', Remark1='${Remark1}' WHERE ID=${Id}`;
//   sql.query(query, (err) => {
//     if (err) {
//       console.log('Error:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       res.json({ message: 'Item updated successfully' });
//     }
//   });
// });

// // Example endpoint: Delete an item
// app.delete('/api/items/:ID', (req, res) => {
//   const { ID } = req.params;
//   const query = `DELETE FROM RoomMaster WHERE ID=${ID}`;
//   sql.query(query, (err) => {
//     if (err) {
//       console.log('Error:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       res.json({ message: 'Item deleted successfully' });
//     }
//   });
// });


// //roomtypemaster:-
// //Example endpoint: Get all roomtypes
// app.get('/api/roomtypes', (req, res) => {
//   const query = 'SELECT * FROM RoomTypeMaster';
//   sql.query(query, (err, result) => {
//     if (err) {
//       console.log('Error:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       res.json(result.recordset);
//     }
//   });
// });

// app.post('/api/roomtypes', (req, res) => {
//   const { RoomTypeCode, RoomTypeDesc, Remark1, Remark2 } = req.body;
//   const query = `INSERT INTO RoomTypeMaster (RoomTypeCode, RoomTypeDesc, Remark1, Remark2) VALUES ('${RoomTypeCode}', '${RoomTypeDesc}', '${Remark1}', '${Remark2}')`;
//   sql.query(query, (err) => {
//     if (err) {
//       console.log('Error:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       res.json({ message: 'Room type created successfully' });
//     }
//   });
// });

// app.put('/api/roomtypes/:roomTypeCode', (req, res) => {
//   const { roomTypeCode } = req.params;
//   const { RoomTypeCode, RoomTypeDesc, Remark1, Remark2 } = req.body;
//   const query = `UPDATE RoomTypeMaster SET RoomTypeCode='${RoomTypeCode}', RoomTypeDesc='${RoomTypeDesc}', Remark1='${Remark1}', Remark2='${Remark2}' WHERE RoomTypeCode='${roomTypeCode}'`;
//   sql.query(query, (err) => {
//     if (err) {
//       console.log('Error updating room type:', err); // Log the error
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       console.log('Room type updated successfully'); // Log the success
//       res.json({ message: 'Room type updated successfully' });
//     }
//   });
// });

// app.delete('/api/roomtypes/:roomTypeCode', (req, res) => {
//   const { roomTypeCode } = req.params;
//   const query = `DELETE FROM RoomTypeMaster WHERE RoomTypeCode='${roomTypeCode}'`;
//   sql.query(query, (err) => {
//     if (err) {
//       console.log('Error deleting room type:', err); // Log the error
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       console.log('Room type deleted successfully'); // Log the success
//       res.json({ message: 'Room type deleted successfully' });
//     }
//   });
// });


// app.get('/api/filterbydate', (req, res) => {
//   const { checkInDate, checkOutDate } = req.query;

//   // Validate the checkInDate and checkOutDate (optional, depending on your requirements)

//   // SQL query to get available rooms
//   const query = `
//     SELECT RoomNo
//     FROM RoomMaster
//     WHERE RoomNo NOT IN (
//       SELECT RoomNo
//       FROM RoomBookingEntries
//       WHERE ArrivalDate <= @DepartureDate
//       AND DepartureDate >= @ArrivalDate
//     );
//   `;

//   const request = new sql.Request();
//   request.input('ArrivalDate', sql.Date, checkInDate);
//   request.input('DepartureDate', sql.Date, checkOutDate);

//   // Execute the SQL query with the check-in and check-out dates parameters
//   request.query(query, (err, result) => {
//     if (err) {
//       console.log('Error:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       const availableRooms = result.recordset.map((room) => room.RoomNo);
//       console.log('Available Rooms:', availableRooms);
//       res.json(availableRooms);
//     }
//   });
// });

// // Endpoint to get room numbers and their corresponding room type descriptions
// app.get('/api/roomsWithTypes', (req, res) => {
//   const query = `
//     SELECT RoomMaster.RoomNo, RoomTypeMaster.RoomTypeDesc
//     FROM RoomMaster
//     JOIN RoomTypeMaster ON RoomMaster.RoomTypeCode = RoomTypeMaster.RoomTypeCode;
//   `;

//   sql.query(query, (err, result) => {
//     if (err) {
//       console.log('Error:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       res.json(result.recordset);
//     }
//   });
// });


// app.get('/api/filterroombytype', (req, res) => {
//   const roomTypeCode = req.query.roomTypeCode;
//   const checkInDate = req.query.checkInDate;
//   const checkOutDate = req.query.checkOutDate;

//   // Validate the roomTypeCode, checkInDate, and checkOutDate (optional, depending on your requirements)

//   // Calculate the departureDate by adding one day to the checkOutDate
//   const departureDate = new Date(checkOutDate);
//   departureDate.setDate(departureDate.getDate() + 1);

//   // Construct the SQL query to filter rooms by room type code and availability date range
//   const query = `
//     SELECT rm.RoomNo
//     FROM RoomMaster rm
//     INNER JOIN RoomTypeMaster rtm ON rm.RoomTypeCode = rtm.RoomTypeCode
//     WHERE rtm.RoomTypeCode = @RoomTypeCode
//     AND rm.RoomNo NOT IN (
//       SELECT rb.RoomNo
//       FROM RoomBookingEntries rb
//       WHERE rb.ArrivalDate < @DepartureDate
//       AND rb.DepartureDate > @ArrivalDate
//     );
//   `;

//   const request = new sql.Request();
//   request.input('RoomTypeCode', sql.Int, roomTypeCode);
//   request.input('ArrivalDate', sql.Date, checkInDate);
//   request.input('DepartureDate', sql.Date, departureDate);

//   // Execute the SQL query with the parameters
//   request.query(query, (err, result) => {
//     if (err) {
//       console.log('Error:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       const roomNumbers = result.recordset.map((room) => room.RoomNo);
//       console.log('Filtered Room Numbers:', roomNumbers);
//       res.json(roomNumbers);
//     }
//   });
// });


// app.get('/api/roombookings', (req, res) => {
//   const query = 'SELECT * FROM RoomBookingEntries';
//   sql.query(query, (err, result) => {
//     if (err) {
//       console.log('Error:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       res.json(result.recordset);
//     }
//   });
// });

// app.get('/api/allRoomsdata', async (req, res) => {
//   try {
//     const query = 'SELECT * FROM RoomMaster';
//     const result = await sql.query(query);

//     console.log('Database Query Result:', result.recordset);

//     res.json(result.recordset);
//   } catch (error) {
//     console.log('Error:', error);
//     res.status(500).json({ error: 'An error occurred while fetching data' });
//   }
// });


// app.post('/api/roombookings', (req, res) => {
//   console.log('Request Body:', req.body); // Add this line for debugging

//   const {
//     roomNumbers,
//     arrivalDate,
//     departureDate,
//     adults,
//     children,
//     EntryNo,
//     trDate,
//     totalAmount,
//     advanceAmount,
//     customerName,
//     age,
//     city,
//     phoneNo,
//     aadharNo,
//     emailId,
//     vehicleNo,
//     blanketRate,
//     blanketAmt,
//     blanketQty,
//     bedQty,
//     bedRate,
//     bedAmt,
//     remark,
//   } = req.body;

//   if (!roomNumbers || !Array.isArray(roomNumbers) || roomNumbers.length === 0) {
//     return res.status(400).json({ error: 'Invalid roomNumbers. It should be a non-empty array.' });
//   }

//   const insertQueries = roomNumbers.map(roomNumber => {
//     return `
//       INSERT INTO RoomBookingEntries (
//         CustomerName,
//         Age,
//         City,
//         PhoneNo,
//         AadharNo,
//         EmailId,
//         VehicleNo,
//         EntryNo,
//         TrDate,
//         ArrivalDate,
//         DepartureDate,
//         Adults,
//         Childs,
//         TotalAmount,
//         AdvanceAmount,
//         RoomNo,
//         Item1Qty,
//         Item1Rate,
//         Item1Amt,
//         Item2Qty,
//         Item2Rate,
//         Item2Amt,
//         Remark
//       )
//       VALUES (
//         '${customerName}',
//         ${age},
//         '${city}',
//         '${phoneNo}',
//         '${aadharNo}',
//         '${emailId}',
//         '${vehicleNo}',
//         '${EntryNo}',
//         '${trDate}',
//         '${arrivalDate}',
//         '${departureDate}',
//         ${adults},
//         ${children},
//         ${totalAmount},
//         ${advanceAmount},
//         ${roomNumber},
//         ${blanketQty},
//         ${blanketRate},
//         ${blanketAmt},
//         ${bedQty},
//         ${bedRate},
//         ${bedAmt},
//         ${remark},
//       )
//     `;
//   }).join('; ');

//   sql.query(insertQueries, (err) => {
//     if (err) {
//       console.log('Error:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       res.json({ message: 'Room bookings created successfully' });
//     }
//   });
// });





// app.put('/api/roombookings/:EntryNo', (req, res) => {
//   const EntryNo = req.params.EntryNo;

//   // Retrieve the updated values from the request body
//   const {
//     roomNumbers,
//     arrivalDate,
//     departureDate,
//     adults,
//     children,
//     trDate,
//     totalAmount,
//     advanceAmount,
//     customerName,
//     age,
//     city,
//     phoneNo,
//     aadharNo,
//     emailId,
//     vehicleNo,
//     paymentMode,
//     refundDate,
//     refundAmt,
//     remark,
//   } = req.body;

//   // Check if the provided EntryNo is a valid string (you can add more validation as per your requirements)
//   if (typeof EntryNo !== 'string') {
//     return res.status(400).json({ error: 'Invalid EntryNo. It should be a string.' });
//   }

//   // Validate that roomNumbers is an array and not empty before calling join
//   if (!Array.isArray(roomNumbers) || roomNumbers.length === 0) {
//     return res.status(400).json({ error: 'Invalid roomNumbers. It should be a non-empty array.' });
//   }

//   // You might want to add further validation for the updated data here

//   const updateQuery = `
//   UPDATE RoomBookingEntries
//   SET
//     CustomerName = '${customerName}',
//     Age = ${age},
//     City = '${city}',
//     PhoneNo = '${phoneNo}',
//     AadharNo = '${aadharNo}',
//     EmailId = '${emailId}',
//     VehicleNo = '${vehicleNo}',
//     TrDate = '${trDate}',
//     ArrivalDate = '${arrivalDate}',
//     DepartureDate = '${departureDate}',
//     Adults = ${adults},
//     Childs = ${children},
//     TotalAmount = ${totalAmount},
//     AdvanceAmount = ${advanceAmount},
//     RoomNo = ${roomNumbers[0]},
//     PaymentMode = '${paymentMode}',
//     RefundDate = '${refundDate}',
//     RefundAmount = ${refundAmt},
//     Remark = '${remark}'
//   WHERE EntryNo = '${EntryNo}'
// `;

// sql.query(updateQuery, (err) => {
//   if (err) {
//     console.log('Error:', err);
//     res.status(500).json({ error: 'Internal server error' });
//   } else {
//     res.json({ message: 'Room booking updated successfully' });
//   }
// });

// });


// app.delete('/api/roombookings/:EntryNo/:roomNumbers', (req, res) => {
//   const { EntryNo, roomNumbers } = req.params;

//   const query = `
//     DELETE FROM RoomBookingEntries
//     WHERE EntryNo = '${EntryNo}' AND RoomNo = '${roomNumbers}'
//   `;

//   sql.query(query, (err) => {
//     if (err) {
//       console.log('Error deleting room booking:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       console.log('Room booking deleted successfully');
//       res.json({ message: 'Room booking deleted successfully' });
//     }
//   });
// });


// app.get('/api/filterroombookings', (req, res) => {
//   const { checkInDate, checkOutDate } = req.query;

//   // Validate the inputs (optional, depending on your requirements)
//   if (!checkInDate || !checkOutDate) {
//     return res.status(400).json({ error: 'Invalid input parameters' });
//   }

//   // Construct the SQL query to filter room bookings
//   const query = `
//     SELECT rbe.*
//     FROM RoomBookingEntries rbe
//     WHERE  
//       rbe.ArrivalDate >= '${checkInDate}' AND
//       rbe.DepartureDate <= '${checkOutDate}';  
//   `;

//   // Execute the query
//   sql.query(query, (err, result) => {
//     if (err) {
//       console.log('Error:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       res.json(result.recordset);
//     }
//   });
// });




const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Database configuration
const config = {
  user: 'Well1',
  password: 'well228608',
  server: 'sanghinstance.chasw9cgenor.ap-south-1.rds.amazonaws.com',
  port: 1857, // Add the port number here
  database: 'DevData1',
  options: {
    encrypt: true, // For Azure SQL Database
    trustServerCertificate: true, // Change this if you're using a self-signed certificate
  },
};


// Connect to the database
sql.connect(config)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });

// Start the server
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Example endpoint: Get all items
app.get('/api/items', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM RoomMaster');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
