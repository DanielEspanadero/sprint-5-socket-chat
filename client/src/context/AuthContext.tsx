import React, { createContext, useCallback, useContext, useState } from "react";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "./types/types";
import { ChatContext } from "./chat/ChatContext";