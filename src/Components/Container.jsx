import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import "./Container.css";

export default function Container() {
  const glove =
    "https://cdn2.iconfinder.com/data/icons/superhero-color-line/48/superhero_pixel_perfect_color_line_icons_21-gauntlet-512.png";
  const [keoBuaBaoArr, setkeoBuaBaoArr] = useState([
    {
      img: "./images/keo.png",
      role: "keo",
    },
    {
      img: "./images/bua.png",
      role: "bua",
    },
    {
      img: "./images/bao.png",
      role: "bao",
    },
  ]);
  const [botRoleArr, setBotRole] = useState([
    {
      img: "./images/keo.png",
      role: "keo",
    },
    {
      img: "./images/bua.png",
      role: "bua",
    },
    {
      img: "./images/bao.png",
      role: "bao",
    },
  ]);

  const [botRole, setbotRole] = useState({
    img: "",
    role: "",
  });
  const [luaChon, setluaChon] = useState({
    img: glove,
    role: "",
  });
  const [soLuotChoi, setsoLuotChoi] = useState(0);
  const [soLuotThang, setsoLuotThang] = useState(0);

  let handleSelectRole = (item) => {
    setluaChon({
      img: item.img,
      role: item.role,
    });
  };
  let handleBotRandomRole = () => {
    const randomRole =
      botRoleArr[Math.floor(Math.random() * botRoleArr.length)];
    setbotRole({
      img: randomRole.img,
      role: randomRole.role,
    });
  };

  let handleLogic = () => {
    if (luaChon.role == botRole.role) {
      setsoLuotChoi(soLuotChoi + 1);
      Swal.fire("Thông báo!", "Bạn đã hòa", "info");
      setbotRole({
        img: glove,
        role: "",
      });
      setluaChon({
        img: glove,
        role: "",
      });
    }
    if (luaChon.role === "keo" && botRole.role === "bua") {
      setsoLuotChoi(soLuotChoi + 1);
      Swal.fire("Thông báo!", "Bạn đã thua", "error");
      setbotRole({
        img: glove,
        role: "",
      });
      setluaChon({
        img: glove,
        role: "",
      });
    }
    if (luaChon.role === "keo" && botRole.role === "bao") {
      setsoLuotChoi(soLuotChoi + 1);
      setsoLuotThang(soLuotThang + 1);
      Swal.fire("Thông báo!", "Bạn đã thắng", "success");
      setbotRole({
        img: glove,
        role: "",
      });
      setluaChon({
        img: glove,
        role: "",
      });
    }
    if (luaChon.role === "bua" && botRole.role === "keo") {
      setsoLuotChoi(soLuotChoi + 1);
      setsoLuotThang(soLuotThang + 1);
      Swal.fire("Thông báo!", "Bạn đã thắng", "success");
      setbotRole({
        img: glove,
        role: "",
      });
      setluaChon({
        img: glove,
        role: "",
      });
    }
    if (luaChon.role === "bua" && botRole.role === "bao") {
      setsoLuotChoi(soLuotChoi + 1);
      Swal.fire("Thông báo!", "Bạn đã thua", "error");
      setbotRole({
        img: glove,
        role: "",
      });
      setluaChon({
        img: glove,
        role: "",
      });
    }
    if (luaChon.role === "bao" && botRole.role === "keo") {
      setsoLuotChoi(soLuotChoi + 1);
      Swal.fire("Thông báo!", "Bạn đã thua", "error");
      setbotRole({
        img: glove,
        role: "",
      });
      setluaChon({
        img: glove,
        role: "",
      });
    }
    if (luaChon.role === "bao" && botRole.role === "bua") {
      setsoLuotChoi(soLuotChoi + 1);
      setsoLuotThang(soLuotThang + 1);
      Swal.fire("Thông báo!", "Bạn đã thắng", "success");
      setbotRole({
        img: glove,
        role: "",
      });
      setluaChon({
        img: glove,
        role: "",
      });
    }
  };
  useEffect(() => {
    setbotRole({
      img: glove,
      role: "",
    });
    return () => {};
  }, []);

  let handlePlayGame = () => {
    if (luaChon.role == "" && botRole.role == "") {
      return Swal.fire(
        "Thông báo!",
        "Vui lòng chọn kéo, búa hoặc bao",
        "error"
      );
    } else {
      handleBotRandomRole();
      handleLogic();
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2 col-sm-2 " style={{ marginTop: "100px" }}>
          <div>
            {/* choice result */}
            <div className="bgColor text-center">
              <img
                src={luaChon.img}
                role={luaChon.role}
                style={{ width: "50%", height: "100%" }}
              />
            </div>
            {/* iron img */}
            <div>
              <img
                src="./images/player.png"
                alt="player"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            {/* keo bua bao button */}
            <div className="d-flex justify-content-center">
              {keoBuaBaoArr.map((item) => {
                return (
                  <button
                    className="bgColor border mx-2"
                    style={{ width: "200px", height: "90px", zIndex: "1" }}
                    onClick={() => {
                      handleSelectRole(item);
                    }}
                  >
                    <img
                      style={{ width: "100px", height: "100%" }}
                      src={item.img}
                      role={item.role}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className="col-8 col-sm-8 text-center"
          style={{ marginTop: "100px", color: "white" }}
        >
          <h1 className="fontFace">
            I AM <span className="glowText">IRON MAN </span>
            <br />I LOVE YOU <span className="text-danger">3000</span>
          </h1>
        </div>

        <div className="col-2 col-sm-2" style={{ marginTop: "100px" }}>
          <div>
            <div className="bgColor text-center">
              <img
                src={botRole.img}
                data={botRole.role}
                style={{ width: "50%", height: "100%" }}
              />
            </div>
            <div>
              <img
                src="./images/playerComputer.png"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fontFace position-absolute inforText text-center">
        <p className="text-white">
          <h2 className="" style={{ fontSize: "3rem" }}>
            Số bàn <span className="text-primary">thắng</span>:
            <span className="text-danger"> {soLuotThang}</span>
          </h2>
          <h2 className="" style={{ fontSize: "3rem" }}>
            Số bàn <spancl className="text-warning">chơi</spancl>:
            <span className="text-danger"> {soLuotChoi}</span>
          </h2>
        </p>
        <button
          className="btn btn-success"
          onClick={() => {
            handlePlayGame();
          }}
        >
          Play game
        </button>
      </div>
    </div>
  );
}
