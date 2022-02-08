// inisiasi library
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")
 
// implementation
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// create MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pelanggaran_siswa"
})
 
db.connect(error => {
    if (error) {
        console.log(error.message)
    } else {
        console.log("MySQL Connected")
    }
})
// end-point akses data siswa
app.get("/siswa", (req, res) => {
    // create sql query
    let sql = "select * from siswa"
 
    // run query
    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                siswa: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

// end-point akses data siswa berdasarkan id_siswa tertentu
app.get("/siswa/:id", (req, res) => {
    let data = {
        id_siswa: req.params.id
    }
    // create sql query
    let sql = "select * from siswa where ?"
 
    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                siswa: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

// end-point menyimpan data siswa
app.post("/siswa", (req,res) => {
 
    // prepare data
    let data = {
        nis: req.body.nis,
        nama_siswa: req.body.nama_siswa,
        kelas: req.body.kelas,
        poin: req.body.poin
    }
 
    // create sql query insert
    let sql = "insert into siswa set ?"
 
    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) // send response
    })
})

// end-point mengubah data siswa
app.put("/siswa", (req,res) => {
 
    // prepare data
    let data = [
        // data
        {
            nis: req.body.nis,
            nama_siswa: req.body.nama_siswa,
            kelas: req.body.kelas,
            poin: req.body.poin
        },
 
        // parameter (primary key)
        {
            id_siswa: req.body.id_siswa
        }
    ]
// create sql query update
let sql = "update siswa set ? where ?"
 
// run query
db.query(sql, data, (error, result) => {
    let response = null
    if (error) {
        response = {
            message: error.message
        }
    } else {
        response = {
            message: result.affectedRows + " data updated"
        }
    }
    res.json(response) // send response
})
})

// end-point menghapus data siswa berdasarkan id_siswa
app.delete("/siswa/:id", (req,res) => {
    // prepare data
    let data = {
        id_siswa: req.params.id
    }
 
    // create query sql delete
    let sql = "delete from siswa where ?"
 
    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) // send response
    })
})

// user
app.get("/user", (req, res) => {
    // create sql query
    let sql = "select * from user"
 
    // run query
    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                user: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

// end-point akses data user berdasarkan id_user tertentu
app.get("/user/:id", (req, res) => {
    let data = {
        id_user: req.params.id
    }
    // create sql query
    let sql = "select * from user where ?"
 
    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                user: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

// end-point menyimpan data user
app.post("/user", (req,res) => {
 
    // prepare data
    let data = {
        nama_user: req.body.nama_user,
        username: req.body.username,
        password: req.body.password
    }
 
    // create sql query insert
    let sql = "insert into user set ?"
 
    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) // send response
    })
})

// end-point mengubah data user
app.put("/user", (req,res) => {
 
    // prepare data
    let data = [
        // data
        {
            nama_user: req.body.nama_user,
            username: req.body.username,
            password: req.body.password
        },
 
        // parameter (primary key)
        {
            id_user: req.body.id_user
        }
    ]
// create sql query update
let sql = "update user set ? where ?"
 
// run query
db.query(sql, data, (error, result) => {
    let response = null
    if (error) {
        response = {
            message: error.message
        }
    } else {
        response = {
            message: result.affectedRows + " data updated"
        }
    }
    res.json(response) // send response
})
})

// end-point menghapus data user berdasarkan id_user
app.delete("/user/:id", (req,res) => {
    // prepare data
    let data = {
        id_user: req.params.id
    }
 
    // create query sql delete
    let sql = "delete from user where ?"
 
    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) // send response
    })
})

// pelanggaran
app.get("/pelanggaran", (req, res) => {
    // create sql query
    let sql = "select * from pelanggaran"
 
    // run query
    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                pelanggaran: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

// end-point akses data pelanggaran berdasarkan id_pelanggaran tertentu
app.get("/pelanggaran/:id", (req, res) => {
    let data = {
        id_pelanggaran: req.params.id
    }
    // create sql query
    let sql = "select * from pelanggaran where ?"
 
    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                pelanggaran: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

// end-point menyimpan data pelanggaran
app.post("/pelanggaran", (req,res) => {
 
    // prepare data
    let data = {
        nama_pelanggaran: req.body.nama_pelanggaran,
        poin: req.body.poin
    }
 
    // create sql query insert
    let sql = "insert into pelanggaran set ?"
 
    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) // send response
    })
})

// end-point mengubah data pelanggaran
app.put("/pelanggaran", (req,res) => {
 
    // prepare data
    let data = [
        // data
        {
            nama_pelanggaran: req.body.nama_pelanggaran,
            poin: req.body.poin
        },
 
        // parameter (primary key)
        {
            id_pelanggaran: req.body.id_pelanggaran
        }
    ]
// create sql query update
let sql = "update pelanggaran set ? where ?"
 
// run query
db.query(sql, data, (error, result) => {
    let response = null
    if (error) {
        response = {
            message: error.message
        }
    } else {
        response = {
            message: result.affectedRows + " data updated"
        }
    }
    res.json(response) // send response
})
})

// end-point menghapus data pelanggaran berdasarkan id_pelanggaran
app.delete("/pelanggaran/:id", (req,res) => {
    // prepare data
    let data = {
        id_pelanggaran: req.params.id
    }
 
    // create query sql delete
    let sql = "delete from pelanggaran where ?"
 
    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) // send response
    })
})

// end-point menambahkan data pelanggaran siswa 
const moment = require("moment")
app.post("/pelanggaran_siswa", (req,res) => {
    // prepare data to pelanggaran_siswa
    let data = {
        id_siswa: req.body.id_siswa,
        id_user: req.body.id_user,
        waktu: moment().format('YYYY-MM-DD HH:mm:ss') // get current time
    }
 
    // parse to JSON
    let pelanggaran = JSON.parse(req.body.pelanggaran)
 
    // create query insert to pelanggaran_siswa
    let sql = "insert into pelanggaran_siswa set ?"
 
    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        
        if (error) {
            res.json({message: error.message})
        } else {
            
            // get last inserted id_pelanggaran
            let lastID = result.insertId
 
            // prepare data to detail_pelanggaran
            let data = []
            for (let index = 0; index < pelanggaran.length; index++) {
                data.push([
                    lastID, pelanggaran[index].id_pelanggaran
                ])                
            }
 
            // create query insert detail_pelanggaran
            let sql = "insert into detail_pelanggaran_siswa values ?"
 
            db.query(sql, [data], (error, result) => {
                if (error) {
                    res.json({message: error.message})
                } else {
                    res.json({message: "Data has been inserted"})
                }
            })
        }
    })
})

// end-point menampilkan data pelanggaran siswa
app.get("/pelanggaran_siswa", (req,res) => {
    // create sql query
    let sql = "select p.id_pelanggaran_siswa, p.id_siswa,p.waktu, s.nis, s.nama_siswa, p.id_user, u.nama_user " +
     "from pelanggaran_siswa p join siswa s on p.id_siswa = s.id_siswa " +
     "join user u on p.id_user = u.id_user"
 
    // run query
    db.query(sql, (error, result) => {
        if (error) {
            res.json({ message: error.message})   
        }else{
            res.json({
                count: result.length,
                pelanggaran_siswa: result
            })
        }
    })
})

// end-point untuk menampilkan detail pelanggaran
app.get("/pelanggaran_siswa/:id_pelanggaran_siswa", (req,res) => {
    let param = { id_pelanggaran_siswa: req.params.id_pelanggaran_siswa}
 
    // create sql query
    let sql = "select p.nama_pelanggaran, p.poin " + 
    "from detail_pelanggaran_siswa dps join pelanggaran p "+
    "on p.id_pelanggaran = dps.id_pelanggaran " +
    "where ?"
 
    db.query(sql, param, (error, result) => {
        if (error) {
            res.json({ message: error.message})   
        }else{
            res.json({
                count: result.length,
                detail_pelanggaran_siswa: result
            })
        }
    })
})

// end-point untuk menghapus data pelanggaran_siswa
app.delete("/pelanggaran_siswa/:id_pelanggaran_siswa", (req, res) => {
    let param = { id_pelanggaran_siswa: req.params.id_pelanggaran_siswa}
 
    // create sql query delete detail_pelanggaran
    let sql = "delete from detail_pelanggaran_siswa where ?"
 
    db.query(sql, param, (error, result) => {
        if (error) {
            res.json({ message: error.message})
        } else {
            let param = { id_pelanggaran_siswa: req.params.id_pelanggaran_siswa}
            // create sql query delete pelanggaran_siswa
            let sql = "delete from pelanggaran_siswa where ?"
 
            db.query(sql, param, (error, result) => {
                if (error) {
                    res.json({ message: error.message})
                } else {
                    res.json({message: "Data has been deleted"})
                }
            })
        }
    })
 
})


app.listen(8000, () => {
    console.log("Run on port 8000")
})

