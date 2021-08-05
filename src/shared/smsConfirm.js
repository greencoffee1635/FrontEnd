import axios from "axios";
import Cache from "memory-cache";
import CryptoJS from "crypto-js";
import { config } from "./config";
import Swal from "sweetalert2";

const date = Date.now().toString();
const uri = config.NCP_serviceID;
const secretKey = config.NCP_secretKey;
const accessKey = config.NCP_accessKey;
const method = "POST";
const space = " ";
const newLine = "\n";
const url = `https://sens.apigw.ntruss.com/sms/v2/services/${uri}/messages`;
const url2 = `/sms/v2/services/${uri}/messages`;

const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
hmac.update(method);
hmac.update(space);
hmac.update(url2);
hmac.update(newLine);
hmac.update(date);
hmac.update(newLine);
hmac.update(accessKey);

const hash = hmac.finalize();
const signature = hash.toString(crypto.enc.Base64);

export const smsConfirm = (phoneNum) =>
  async function (request, response) {
    const phoneNumber = phoneNum;

    Cache.del(phoneNumber);

    //인증번호 생성
    const verifyCode = Math.floor(Math.random() * (999999 - 100000)) + 100000;

    Cache.put(phoneNumber, verifyCode.toString());

    axios({
      method: method,
      json: true,
      url: url,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-ncp-iam-access-key": accessKey,
        "x-ncp-apigw-timestamp": date,
        "x-ncp-apigw-signature-v2": signature,
      },
      data: {
        type: "SMS",
        contentType: "COMM",
        countryCode: "82",
        from: config.hostPhoneNumber,
        content: `[본인 확인] 인증번호 [${verifyCode}]를 입력해주세요.`,
        messages: [
          {
            to: `${phoneNumber}`,
          },
        ],
      },
    })
      .then((response) => {
        console.log("response", response.data, response["data"]);
        response.data
          ? Swal.fire({
              icon: "success",
              title: "인증번호가 전송되었습니다.",
              showConfirmButton: false,
              timer: 1400,
            })
          : Swal.fire({
              icon: "error",
              title: "인증요청이 실패되었습니다.",
              showConfirmButton: false,
              timer: 1400,
            });
      })
      .catch((err) => {
        console.log("인증 실패", err);
      });
  };

// export const verify = async function (request, response) {
//   const phoneNumber = request.body.phoneNumber;
//   const verifyCode = response.body.verifyCode;

//   const CacheData = Cache.get(phoneNumber);

//   if (!CacheData) {
//     return response.send("fail");
//   } else if (CacheData !== verifyCode) {
//     return response.send("fail");
//   } else {
//     Cache.del(phoneNumber);
//     return response.send("success");
//   }
// };
