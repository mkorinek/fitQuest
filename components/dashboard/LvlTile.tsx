import AppView from "../AppView";
import Lvl from "./Lvl";
import XPBar from "./XPBar";

export type LvlProps = {
  level: number;
  currentXP: number;
  nexLvlXP: number;
};

export default function LvlTile({ level, currentXP, nexLvlXP }: LvlProps) {
  return (
    <AppView>
      <Lvl level={level} currentXP={currentXP} nexLvlXP={nexLvlXP} />
      <XPBar level={level} currentXP={currentXP} nexLvlXP={nexLvlXP} />
    </AppView>
  );
}
