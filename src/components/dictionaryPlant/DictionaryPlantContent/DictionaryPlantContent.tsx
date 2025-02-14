"use client";

import { useRouter } from "next/navigation";
// import SvgIcons from "components/@common/SvgIcons/SvgFill";
// import SvgFill from "components/@common/SvgIcons/SvgFill";
// import SvgStroke from "components/@common/SvgIcons/SvgStroke";
import SeeMoreContentBox from "@/components/common/SeeMoreContentBox/SeeMoreContentBox";
import TagBox from "@/components/dictionaryPlant/TagBox/TagBox";
import TagSwitch from "@/components/dictionaryPlant/TagSwitch/TagSwitch";
import type { DictionaryPlantExtendCycles } from "@/hooks/useDictionaryPlantDetail";
import { NO_INFORMATION, URL_PATH } from "@/constants";
import theme from "@/style/theme";
import {
  Accent,
  ContentBox,
  FamilyName,
  GardenButton,
  HeaderBox,
  InformationTagBox,
  ManageInfoBox,
  Name,
  PropBox,
  PropsBox,
} from "./DictionaryPlantContent.style";
import parseTemperature from "./parseTemperature";

const DictionaryPlantContent = (props: DictionaryPlantExtendCycles) => {
  const {
    id,
    postingPlace,
    familyName,
    name,
    image,
    manageLevel,
    growSpeed,
    requireHumidity,
    requireTemp,
    minimumTemp,
    smell,
    poison,
    specialManageInfo,
    waterOptions,
  } = props;

  const router = useRouter();

  const goFilteredGarden = () => {
    router.push(URL_PATH.garden);
  };

  const place = postingPlace.map((position, idx) => {
    const text =
      position === NO_INFORMATION ? "제공된 정보가 없어요😢" : position;
    return <TagBox.Content key={idx}>{text}</TagBox.Content>;
  });

  const { type: tempType, temperature: minTemp } =
    parseTemperature(minimumTemp);
  const { primary: primaryColor, accent: accentColor } = theme.color;
  return (
    <>
      <HeaderBox>
        <div>
          <Name>{name}</Name>
          <FamilyName>{familyName}</FamilyName>
          <GardenButton
            type="button"
            onClick={goFilteredGarden}
            aria-label="모두의 정원"
          >
            {/* <SvgStroke
              color={theme.color.fontPrimaryForBackground}
              size={16}
              icon="bulletin-board-line"
            /> */}
            모두의 정원
            {/* <SvgFill
              color={theme.color.sub}
              size={12}
              icon="line-arrow-right"
            /> */}
          </GardenButton>
        </div>
      </HeaderBox>
      <ContentBox>
        <InformationTagBox>
          <TagSwitch title="물 주기" optionMap={waterOptions} />
        </InformationTagBox>
        <InformationTagBox>
          <TagBox>
            <TagBox.Title>추천 장소</TagBox.Title>
            {place}
          </TagBox>
        </InformationTagBox>

        <PropsBox>
          <PropBox>
            {/* <SvgIcons
              icon={`manage-level-${manageLevel}`}
              fill={primaryColor}
            /> */}
            <span>
              {manageLevel !== NO_INFORMATION ? (
                <>
                  이 식물은 <Accent>{`"${manageLevel}"`}</Accent>에게 추천해요🌻
                </>
              ) : (
                "키우기 난이도 정보를 찾을 수 없어요😭"
              )}
            </span>
          </PropBox>

          <PropBox>
            {/* <SvgIcons icon="potted-plant" color={primaryColor} /> */}
            <span>
              {growSpeed !== NO_INFORMATION ? (
                <>
                  생장 속도는 <Accent>{`"${growSpeed}"`}</Accent>이에요🌱
                </>
              ) : (
                "생장 속도 정보를 찾을 수 없어요🌱"
              )}
            </span>
          </PropBox>

          <PropBox>
            {/* <SvgIcons icon="humidity" color={primaryColor} /> */}
            <span>
              {requireHumidity !== NO_INFORMATION ? (
                <>
                  권장 습도는 <Accent>{`"${requireHumidity}"`}</Accent>에요💧
                </>
              ) : (
                "권장 습도 정보를 찾을 수 없어요💧"
              )}
            </span>
          </PropBox>

          <PropBox>
            {/* <SvgIcons icon="thermometer-sun" color={primaryColor} /> */}
            <span>
              {requireTemp !== NO_INFORMATION ? (
                <>
                  권장 온도는 <Accent>{`"${requireTemp}"`}</Accent>에요🥰
                </>
              ) : (
                "권장 온도 정보를 찾을 수 없어요😢"
              )}
            </span>
          </PropBox>

          <PropBox>
            {/* <SvgIcons icon="thermometer-snow" color={primaryColor} /> */}
            <span>
              {minimumTemp !== NO_INFORMATION ? (
                <>
                  적어도 <Accent>{`"${minTemp} ${tempType}"`}</Accent> 에서
                  키워야 해요!🥶
                </>
              ) : (
                "겨울철 최저 온도 정보를 찾을 수 없어요🥶"
              )}
            </span>
          </PropBox>

          <PropBox>
            {/* <SvgIcons icon="fragrance" color={primaryColor} /> */}
            <span>
              {smell !== NO_INFORMATION ? (
                <>
                  냄새는 <Accent>{`"${smell}"`}</Accent>이에요🤧
                </>
              ) : (
                "냄새 정보를 찾을 수 없어요🤧"
              )}
            </span>
          </PropBox>

          <PropBox>
            {/* <SvgIcons icon="warning" color={accentColor} /> */}
            <span>
              {poison !== NO_INFORMATION ? (
                <>
                  독성은 <Accent>{`"${poison}"`}</Accent> 이에요!🚨
                </>
              ) : (
                "독성 정보가 없어요🤔"
              )}
            </span>
          </PropBox>
        </PropsBox>

        <ManageInfoBox>
          <p>특별 관리 정보</p>
          <SeeMoreContentBox>
            {specialManageInfo !== NO_INFORMATION
              ? specialManageInfo
              : "관련 정보가 없어요😇"}
          </SeeMoreContentBox>
        </ManageInfoBox>
      </ContentBox>
    </>
  );
};

export default DictionaryPlantContent;
