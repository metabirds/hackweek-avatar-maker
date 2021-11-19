import React from "react";
import { Toolbar } from "./Toolbar";
import { UploadButton } from "./UploadButton";
import { MoreMenu } from "./MoreMenu";
import { dispatch } from "../dispatch";
import constants from "../constants";

function dispatchResetView() {
  dispatch(constants.resetView);
}

function dispatchExportAvatar() {
  dispatch(constants.exportAvatar);
}

export function ToolbarContainer({ onGLBUploaded, randomizeConfig }) {
  return (
    <Toolbar>
      <span className="appName">CYZY SPACE Avatar Maker</span>
      {/* <MoreMenu
        items={
          <>
            <UploadButton onGLBUploaded={onGLBUploaded} />
          </>
        }
      ></MoreMenu> */}
      <button onClick={randomizeConfig}>ランダム</button>
      <button onClick={dispatchResetView}>カメラをリセット</button>
      <button onClick={dispatchExportAvatar} className="primary">
        かんせい！
      </button>
    </Toolbar>
  );
}
