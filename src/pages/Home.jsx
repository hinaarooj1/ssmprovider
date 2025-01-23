import React, { useState, useEffect, useRef } from "react";

import Header from '../components/Header';
import PacotesSection from '../components/PacotesSection';
import Iphone from '../components/Iphone';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import CountUp from "react-countup";

import './home.css'
function Home() {
  const [countTrigger, setCountTrigger] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCountTrigger(true);
          } else {
            setCountTrigger(false);
          }
        });
      },
      { threshold: 0.5 } // Section must be 50% visible to trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
      <div className="relative">
        <Header />
        <main className="lg:pt-[84px] 2xl:pt-[10%] !z-20 pt-[90px] text-white lg:px-16 2xl:px-24">
          <div className="flex w-full flex-col lg:flex-row justify-between gap-8 items-center">
            <div className="lg:max-w-[55%] 2xl:max-w-[60%] flex flex-col h-full gap-0 sm:gap-5 lg:gap-12 pb-3">
              <div>
                <h1 className="font-weight-bold montserrat leading-tight lg:leading-snug lg:text-5xl 2xl:text-7xl text-3xl font-bold lg:text-left texxt t-centerext whitespace-pre-line lg:px-0 px-1">
                  Comprar {" "}
                  <span className="text-yello montserrat lg:text-5xl 2xl:text-7xl">
                    Seguidores
                  </span>
                  :
                  <br />
                  Garanta
                  mais {" "}
                  <span className="text-yello montserrat lg:text-5xl 2xl:text-7xl">
                    curtidas{" "}
                  </span>
                  e
                  <br />
                  <span className="text-yello montserrat lg:text-5xl 2xl:text-7xl">
                    visualizações{" "}
                  </span>
                  nas suas
                  <br />
                  postagens!
                </h1>
                <a>
                </a>
                <a className="mt-4 flex justify-center text-sm md:mt-6 md:text-lg lg:justify-start xl:text-2xl 2xl:text-3xl">
                  <div className="mr-4 text-yellow-400">
                    ★★★★★
                  </div>
                  <div className="whitespace-nowrap font-semibold">
                    4960 Avaliações Verificadas
                  </div>
                </a>
              </div>
              <div className="lg:max-w-[45%] lg:hidden block lg:my-auto w-[95%] mx-auto text-center card-home mt-5 mb-12">
                <div className="video-js vjs-16-9 !w-full vjs-big-play-centered vjs-paused vjs-controls-enabled vjs-touch-enabled vjs-workinghover vjs-v8 vjs-user-active vjs_video_3-dimensions" id="vjs_video_3">
                  <video className="vjs-tech" id="vjs_video_3_html5_api" src="videos/main.mp4">
                    <source src="videos/main.mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="vjs-poster">
                    <picture className="vjs-poster">
                      <img src="../thumbnailMain.jpg" />
                    </picture>
                  </div>
                  <div className="vjs-title-bar vjs-hidden">
                    <div className="vjs-title-bar-title" id="vjs-title-bar-title-27">
                    </div>
                    <div className="vjs-title-bar-description" id="vjs-title-bar-description-28">
                    </div>
                  </div>
                  <div className="vjs-text-track-display" style={{ insetInline: 50 }}>
                    <div style={{ position: 'absolute', inset: 0, margin: '1.5%' }}>
                    </div>
                  </div>
                  <div className="vjs-loading-spinner">
                    <span className="vjs-control-text">
                      Video Player is loading.
                    </span>
                  </div>
                  <button className="vjs-big-play-button">
                    <span className="vjs-icon-placeholder">
                    </span>
                    <span className="vjs-control-text">
                      Play Video
                    </span>
                  </button>
                  <div className="vjs-control-bar">
                    <button className="vjs-play-control vjs-control vjs-button">
                      <span className="vjs-icon-placeholder">
                      </span>
                      <span className="vjs-control-text">
                        Play
                      </span>
                    </button>
                    <button className="vjs-skip-backward-undefined vjs-control vjs-button vjs-hidden">
                      <span className="vjs-icon-placeholder">
                      </span>
                      <span className="vjs-control-text">
                        Skip Backward
                      </span>
                    </button>
                    <button className="vjs-skip-forward-undefined vjs-control vjs-button vjs-hidden">
                      <span className="vjs-icon-placeholder">
                      </span>
                      <span className="vjs-control-text">
                        Skip Forward
                      </span>
                    </button>
                    <div className="vjs-volume-panel vjs-control vjs-volume-panel-horizontal">
                      <button className="vjs-mute-control vjs-control vjs-button vjs-vol-0">
                        <span className="vjs-icon-placeholder">
                        </span>
                        <span className="vjs-control-text">
                          Unmute
                        </span>
                      </button>
                      <div className="vjs-volume-control vjs-control vjs-volume-horizontal">
                        <div className="vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-horizontal">
                          <div className="vjs-mouse-display">
                            <div className="vjs-volume-tooltip">
                            </div>
                          </div>
                          <div className="vjs-volume-level">
                            <span className="vjs-control-text">
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vjs-current-time vjs-time-control vjs-control">
                      <span className="vjs-control-text">
                        Current Time
                      </span>
                      <span className="vjs-current-time-display">
                        0:00
                      </span>
                    </div>
                    <div className="vjs-time-control vjs-time-divider">
                      <div>
                        <span>
                          /
                        </span>
                      </div>
                    </div>
                    <div className="vjs-duration vjs-time-control vjs-control">
                      <span className="vjs-control-text">
                        Duration
                      </span>
                      <span className="vjs-duration-display">
                        1:26
                      </span>
                    </div>
                    <div className="vjs-progress-control vjs-control">
                      <div className="vjs-progress-holder vjs-slider vjs-slider-horizontal">
                        <div className="vjs-load-progress" style={{ width: '12.92%' }}>
                          <span className="vjs-control-text">
                            <span>
                              Loaded
                            </span>
                            :
                            <span className="vjs-control-text-loaded-percentage">
                              12.92%
                            </span>
                          </span>
                          <div style={{ left: '0%', width: '100%' }}>
                          </div>
                        </div>
                        <div className="vjs-mouse-display">
                          <div className="vjs-time-tooltip">
                          </div>
                        </div>
                        <div className="vjs-play-progress vjs-slider-bar" style={{ width: '0%' }}>
                          <div className="vjs-time-tooltip" style={{ right: 0 }}>
                            0:00
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vjs-live-control vjs-control vjs-hidden">
                      <div className="vjs-live-display">
                        <span className="vjs-control-text">
                          Stream Type
                        </span>
                        LIVE
                      </div>
                    </div>
                    <button className="vjs-seek-to-live-control vjs-control">
                      <span className="vjs-icon-placeholder">
                      </span>
                      <span className="vjs-control-text">
                        Seek to live, currently behind live
                      </span>
                      <span className="vjs-seek-to-live-text">
                        LIVE
                      </span>
                    </button>
                    <div className="vjs-remaining-time vjs-time-control vjs-control">
                      <span className="vjs-control-text">
                        Remaining Time
                      </span>
                      <span>
                        -
                      </span>
                      <span className="vjs-remaining-time-display">
                        1:26
                      </span>
                    </div>
                    <div className="vjs-custom-control-spacer vjs-spacer">
                    </div>
                    <div className="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                      <div className="vjs-playback-rate-value" id="vjs-playback-rate-value-label-vjs_video_3_component_285">
                        1x
                      </div>
                      <button className="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-button">
                        <span className="vjs-icon-placeholder">
                        </span>
                        <span className="vjs-control-text">
                          Playback Rate
                        </span>
                      </button>
                      <div className="vjs-menu">
                        <ul className="vjs-menu-content">
                        </ul>
                      </div>
                    </div>
                    <div className="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                      <button className="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-button">
                        <span className="vjs-icon-placeholder">
                        </span>
                        <span className="vjs-control-text">
                          Chapters
                        </span>
                      </button>
                      <div className="vjs-menu">
                        <ul className="vjs-menu-content">
                          <li className="vjs-menu-title">
                            Chapters
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                      <button className="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-button">
                        <span className="vjs-icon-placeholder">
                        </span>
                        <span className="vjs-control-text">
                          Descriptions
                        </span>
                      </button>
                      <div className="vjs-menu">
                        <ul className="vjs-menu-content">
                          <li className="vjs-menu-item vjs-selected">
                            <span className="vjs-menu-item-text">
                              descriptions off
                            </span>
                            <span className="vjs-control-text">
                              , selected
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                      <button className="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-button">
                        <span className="vjs-icon-placeholder">
                        </span>
                        <span className="vjs-control-text">
                          Captions
                        </span>
                      </button>
                      <div className="vjs-menu">
                        <ul className="vjs-menu-content">
                          <li className="vjs-menu-item vjs-texttrack-settings">
                            <span className="vjs-menu-item-text">
                              captions settings
                            </span>
                            <span className="vjs-control-text">
                              , opens captions settings dialog
                            </span>
                          </li>
                          <li className="vjs-menu-item vjs-selected">
                            <span className="vjs-menu-item-text">
                              captions off
                            </span>
                            <span className="vjs-control-text">
                              , selected
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                      <button className="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-button">
                        <span className="vjs-icon-placeholder">
                        </span>
                        <span className="vjs-control-text">
                          Audio Track
                        </span>
                      </button>
                      <div className="vjs-menu">
                        <ul className="vjs-menu-content">
                        </ul>
                      </div>
                    </div>
                    <button className="vjs-picture-in-picture-control vjs-control vjs-button">
                      <span className="vjs-icon-placeholder">
                      </span>
                      <span className="vjs-control-text">
                        Picture-in-Picture
                      </span>
                    </button>
                    <button className="vjs-fullscreen-control vjs-control vjs-button">
                      <span className="vjs-icon-placeholder">
                      </span>
                      <span className="vjs-control-text">
                        Fullscreen
                      </span>
                    </button>
                  </div>
                  <div className="vjs-error-display vjs-modal-dialog vjs-hidden">
                    <p className="vjs-modal-dialog-description vjs-control-text" id="vjs_video_3_component_503_description">
                      This is a modal window.
                    </p>
                    <div className="vjs-modal-dialog-content">
                    </div>
                  </div>
                  <div className="vjs-modal-dialog vjs-hidden vjs-text-track-settings">
                    <p className="vjs-modal-dialog-description vjs-control-text" id="vjs_video_3_component_509_description">
                      Beginning of dialog window. Escape will cancel and close
                      the window.
                    </p>
                    <div className="vjs-modal-dialog-content">
                      <div className="vjs-track-settings-colors">
                        <fieldset className="vjs-fg vjs-track-setting">
                          <legend id="captions-text-legend-vjs_video_3_component_509">
                            Text
                          </legend>
                          <span className="vjs-text-color">
                            <label className="vjs-label" id="captions-foreground-color-vjs_video_3_component_509">
                              Color
                            </label>
                            <select id="vjs_select_535">
                              <option id="captions-foreground-color-vjs_video_3_component_509-White">
                                White
                              </option>
                              <option id="captions-foreground-color-vjs_video_3_component_509-Black">
                                Black
                              </option>
                              <option id="captions-foreground-color-vjs_video_3_component_509-Red">
                                Red
                              </option>
                              <option id="captions-foreground-color-vjs_video_3_component_509-Green">
                                Green
                              </option>
                              <option id="captions-foreground-color-vjs_video_3_component_509-Blue">
                                Blue
                              </option>
                              <option id="captions-foreground-color-vjs_video_3_component_509-Yellow">
                                Yellow
                              </option>
                              <option id="captions-foreground-color-vjs_video_3_component_509-Magenta">
                                Magenta
                              </option>
                              <option id="captions-foreground-color-vjs_video_3_component_509-Cyan">
                                Cyan
                              </option>
                            </select>
                          </span>
                          <span className="vjs-text-opacity vjs-opacity">
                            <label className="vjs-label" id="captions-foreground-opacity-vjs_video_3_component_509">
                              Opacity
                            </label>
                            <select id="vjs_select_536">
                              <option id="captions-foreground-opacity-vjs_video_3_component_509-Opaque">
                                Opaque
                              </option>
                              <option id="captions-foreground-opacity-vjs_video_3_component_509-SemiTransparent">
                                Semi-Transparent
                              </option>
                            </select>
                          </span>
                        </fieldset>
                        <fieldset className="vjs-bg vjs-track-setting">
                          <legend id="captions-background-vjs_video_3_component_509">
                            Text Background
                          </legend>
                          <span className="vjs-bg-color">
                            <label className="vjs-label" id="captions-background-color-vjs_video_3_component_509">
                              Color
                            </label>
                            <select id="vjs_select_537">
                              <option id="captions-background-color-vjs_video_3_component_509-Black">
                                Black
                              </option>
                              <option id="captions-background-color-vjs_video_3_component_509-White">
                                White
                              </option>
                              <option id="captions-background-color-vjs_video_3_component_509-Red">
                                Red
                              </option>
                              <option id="captions-background-color-vjs_video_3_component_509-Green">
                                Green
                              </option>
                              <option id="captions-background-color-vjs_video_3_component_509-Blue">
                                Blue
                              </option>
                              <option id="captions-background-color-vjs_video_3_component_509-Yellow">
                                Yellow
                              </option>
                              <option id="captions-background-color-vjs_video_3_component_509-Magenta">
                                Magenta
                              </option>
                              <option id="captions-background-color-vjs_video_3_component_509-Cyan">
                                Cyan
                              </option>
                            </select>
                          </span>
                          <span className="vjs-bg-opacity vjs-opacity">
                            <label className="vjs-label" id="captions-background-opacity-vjs_video_3_component_509">
                              Opacity
                            </label>
                            <select id="vjs_select_538">
                              <option id="captions-background-opacity-vjs_video_3_component_509-Opaque">
                                Opaque
                              </option>
                              <option id="captions-background-opacity-vjs_video_3_component_509-SemiTransparent">
                                Semi-Transparent
                              </option>
                              <option id="captions-background-opacity-vjs_video_3_component_509-Transparent">
                                Transparent
                              </option>
                            </select>
                          </span>
                        </fieldset>
                        <fieldset className="vjs-window vjs-track-setting">
                          <legend id="captions-window-vjs_video_3_component_509">
                            Caption Area Background
                          </legend>
                          <span className="vjs-window-color">
                            <label className="vjs-label" id="captions-window-color-vjs_video_3_component_509">
                              Color
                            </label>
                            <select id="vjs_select_539">
                              <option id="captions-window-color-vjs_video_3_component_509-Black">
                                Black
                              </option>
                              <option id="captions-window-color-vjs_video_3_component_509-White">
                                White
                              </option>
                              <option id="captions-window-color-vjs_video_3_component_509-Red">
                                Red
                              </option>
                              <option id="captions-window-color-vjs_video_3_component_509-Green">
                                Green
                              </option>
                              <option id="captions-window-color-vjs_video_3_component_509-Blue">
                                Blue
                              </option>
                              <option id="captions-window-color-vjs_video_3_component_509-Yellow">
                                Yellow
                              </option>
                              <option id="captions-window-color-vjs_video_3_component_509-Magenta">
                                Magenta
                              </option>
                              <option id="captions-window-color-vjs_video_3_component_509-Cyan">
                                Cyan
                              </option>
                            </select>
                          </span>
                          <span className="vjs-window-opacity vjs-opacity">
                            <label className="vjs-label" id="captions-window-opacity-vjs_video_3_component_509">
                              Opacity
                            </label>
                            <select id="vjs_select_540">
                              <option id="captions-window-opacity-vjs_video_3_component_509-Transparent">
                                Transparent
                              </option>
                              <option id="captions-window-opacity-vjs_video_3_component_509-SemiTransparent">
                                Semi-Transparent
                              </option>
                              <option id="captions-window-opacity-vjs_video_3_component_509-Opaque">
                                Opaque
                              </option>
                            </select>
                          </span>
                        </fieldset>
                      </div>
                      <div className="vjs-track-settings-font">
                        <fieldset className="vjs-font-percent vjs-track-setting">
                          <legend id="captions-font-size-vjs_video_3_component_509">
                            Font Size
                          </legend>
                          <select id="vjs_select_541">
                            <option id="captions-font-size-vjs_video_3_component_509-50">
                              50%
                            </option>
                            <option id="captions-font-size-vjs_video_3_component_509-75">
                              75%
                            </option>
                            <option id="captions-font-size-vjs_video_3_component_509-100">
                              100%
                            </option>
                            <option id="captions-font-size-vjs_video_3_component_509-125">
                              125%
                            </option>
                            <option id="captions-font-size-vjs_video_3_component_509-150">
                              150%
                            </option>
                            <option id="captions-font-size-vjs_video_3_component_509-175">
                              175%
                            </option>
                            <option id="captions-font-size-vjs_video_3_component_509-200">
                              200%
                            </option>
                            <option id="captions-font-size-vjs_video_3_component_509-300">
                              300%
                            </option>
                            <option id="captions-font-size-vjs_video_3_component_509-400">
                              400%
                            </option>
                          </select>
                        </fieldset>
                        <fieldset className="vjs-edge-style vjs-track-setting">
                          <legend id="vjs_video_3_component_509">
                            Text Edge Style
                          </legend>
                          <select id="vjs_select_542">
                            <option id="vjs_video_3_component_509-None">
                              None
                            </option>
                            <option id="vjs_video_3_component_509-Raised">
                              Raised
                            </option>
                            <option id="vjs_video_3_component_509-Depressed">
                              Depressed
                            </option>
                            <option id="vjs_video_3_component_509-Uniform">
                              Uniform
                            </option>
                            <option id="vjs_video_3_component_509-Dropshadow">
                              Drop
                              shadow
                            </option>
                          </select>
                        </fieldset>
                        <fieldset className="vjs-font-family vjs-track-setting">
                          <legend id="captions-font-family-vjs_video_3_component_509">
                            Font Family
                          </legend>
                          <select id="vjs_select_543">
                            <option id="captions-font-family-vjs_video_3_component_509-ProportionalSansSerif">
                              Proportional Sans-Serif
                            </option>
                            <option id="captions-font-family-vjs_video_3_component_509-MonospaceSansSerif">
                              Monospace Sans-Serif
                            </option>
                            <option id="captions-font-family-vjs_video_3_component_509-ProportionalSerif">
                              Proportional Serif
                            </option>
                            <option id="captions-font-family-vjs_video_3_component_509-MonospaceSerif">
                              Monospace Serif
                            </option>
                            <option id="captions-font-family-vjs_video_3_component_509-Casual">
                              Casual
                            </option>
                            <option id="captions-font-family-vjs_video_3_component_509-Script">
                              Script
                            </option>
                            <option id="captions-font-family-vjs_video_3_component_509-SmallCaps">
                              Small Caps
                            </option>
                          </select>
                        </fieldset>
                      </div>
                      <div className="vjs-track-settings-controls">
                        <button className="vjs-default-button">
                          Reset
                          <span className="vjs-control-text">
                            restore all settings to the default values
                          </span>
                        </button>
                        <button className="vjs-done-button">
                          Done
                        </button>
                      </div>
                    </div>
                    <button className="vjs-close-button vjs-control vjs-button">
                      <span className="vjs-icon-placeholder">
                      </span>
                      <span className="vjs-control-text">
                        Close Modal Dialog
                      </span>
                    </button>
                    <p className="vjs-control-text">
                      End of dialog window.
                    </p>
                  </div>
                </div>
                <span>
                  ⚠️ Assista ao vídeo e descubra como funciona:
                </span>
              </div>
              <div className="lg:ml-0 flex flex-col gap-8 -mt-4 mx-auto">
                <a className="button-main-sel cursor-pointer">
                  Crescer Meu Instagram Agora
                  <span>
                  </span>
                  <span>
                  </span>
                  <span>
                  </span>
                  <span>
                  </span>
                </a>
                <div className="px-4 lg:px-0 xl:w-[80%] flex flex-wrap z-10 lg:gap-x-4 gap-y-1">
                  <span className="lg:mx-0 mx-auto flex items-center gap-1 lg:gap-2 lg:text-base text-sm">
                    <span className>
                      <svg className="lg:h-4 lg:w-4 h-3 w-3" fill="#ffffff" height={16} viewBox="0 0 24 24" width={16} xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z">
                        </path>
                      </svg>
                    </span>
                    <span className="font-semibold tracking-wide">
                      100% Seguro e Sigiloso
                    </span>
                  </span>
                  <span className="lg:mx-0 mx-auto flex items-center gap-1 lg:gap-2 lg:text-base text-sm">
                    <span className>
                      <svg className="lg:h-4 lg:w-4 h-3 w-3" fill="#ffffff" height={16} viewBox="0 0 24 24" width={16} xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z">
                        </path>
                      </svg>
                    </span>
                    <span className="font-semibold tracking-wide">
                      Não Pedimos sua Senha
                    </span>
                  </span>
                  <span className="lg:mx-0 mx-auto flex items-center gap-1 lg:gap-2 lg:text-base text-sm">
                    <span className>
                      <svg className="lg:h-4 lg:w-4 h-3 w-3" fill="#ffffff" height={16} viewBox="0 0 24 24" width={16} xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z">
                        </path>
                      </svg>
                    </span>
                    <span className="font-semibold tracking-wide">
                      Não Precisa Seguir Ninguém
                    </span>
                  </span>
                  <span className="lg:mx-0 mx-auto flex items-center gap-1 lg:gap-2 lg:text-base text-sm">
                    <span className>
                      <svg className="lg:h-4 lg:w-4 h-3 w-3" fill="#ffffff" height={16} viewBox="0 0 24 24" width={16} xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z">
                        </path>
                      </svg>
                    </span>
                    <span className="font-semibold tracking-wide">
                      Suporte Humanizado no Chat
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:max-w-[45%] hidden lg:block lg:my-auto w-[80%] text-center card-home">
              <div className="video-js vjs-16-9 !w-full vjs-big-play-centered vjs-paused vjs-controls-enabled vjs-touch-enabled vjs-workinghover vjs-v8 vjs-user-active vjs_video_554-dimensions" id="vjs_video_554">
                <video className="vjs-tech" id="vjs_video_554_html5_api" src="videos/main.mp4">
                  <source src="videos/main.mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="vjs-poster">
                  <picture className="vjs-poster">
                    <img src="../thumbnailMain.jpg" />
                  </picture>
                </div>
                <div className="vjs-title-bar vjs-hidden">
                  <div className="vjs-title-bar-title" id="vjs-title-bar-title-577">
                  </div>
                  <div className="vjs-title-bar-description" id="vjs-title-bar-description-578">
                  </div>
                </div>
                <div className="vjs-text-track-display" style={{}}>
                  <div style={{ position: 'absolute', inset: 0, margin: '1.5%' }}>
                  </div>
                </div>
                <div className="vjs-loading-spinner">
                  <span className="vjs-control-text">
                    Video Player is loading.
                  </span>
                </div>
                <button className="vjs-big-play-button">
                  <span className="vjs-icon-placeholder">
                  </span>
                  <span className="vjs-control-text">
                    Play Video
                  </span>
                </button>
                <div className="vjs-control-bar">
                  <button className="vjs-play-control vjs-control vjs-button">
                    <span className="vjs-icon-placeholder">
                    </span>
                    <span className="vjs-control-text">
                      Play
                    </span>
                  </button>
                  <button className="vjs-skip-backward-undefined vjs-control vjs-button vjs-hidden">
                    <span className="vjs-icon-placeholder">
                    </span>
                    <span className="vjs-control-text">
                      Skip Backward
                    </span>
                  </button>
                  <button className="vjs-skip-forward-undefined vjs-control vjs-button vjs-hidden">
                    <span className="vjs-icon-placeholder">
                    </span>
                    <span className="vjs-control-text">
                      Skip Forward
                    </span>
                  </button>
                  <div className="vjs-volume-panel vjs-control vjs-volume-panel-horizontal">
                    <button className="vjs-mute-control vjs-control vjs-button vjs-vol-0">
                      <span className="vjs-icon-placeholder">
                      </span>
                      <span className="vjs-control-text">
                        Unmute
                      </span>
                    </button>
                    <div className="vjs-volume-control vjs-control vjs-volume-horizontal">
                      <div className="vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-horizontal">
                        <div className="vjs-mouse-display">
                          <div className="vjs-volume-tooltip">
                          </div>
                        </div>
                        <div className="vjs-volume-level">
                          <span className="vjs-control-text">
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vjs-current-time vjs-time-control vjs-control">
                    <span className="vjs-control-text">
                      Current Time
                    </span>
                    <span className="vjs-current-time-display">
                      0:00
                    </span>
                  </div>
                  <div className="vjs-time-control vjs-time-divider">
                    <div>
                      <span>
                        /
                      </span>
                    </div>
                  </div>
                  <div className="vjs-duration vjs-time-control vjs-control">
                    <span className="vjs-control-text">
                      Duration
                    </span>
                    <span className="vjs-duration-display">
                      1:26
                    </span>
                  </div>
                  <div className="vjs-progress-control vjs-control">
                    <div className="vjs-progress-holder vjs-slider vjs-slider-horizontal">
                      <div className="vjs-load-progress" style={{ width: '12.92%' }}>
                        <span className="vjs-control-text">
                          <span>
                            Loaded
                          </span>
                          :
                          <span className="vjs-control-text-loaded-percentage">
                            12.92%
                          </span>
                        </span>
                        <div style={{ left: '0%', width: '100%' }}>
                        </div>
                      </div>
                      <div className="vjs-mouse-display">
                        <div className="vjs-time-tooltip">
                        </div>
                      </div>
                      <div className="vjs-play-progress vjs-slider-bar" style={{ width: '0%' }}>
                        <div className="vjs-time-tooltip" style={{ right: 0 }}>
                          0:00
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vjs-live-control vjs-control vjs-hidden">
                    <div className="vjs-live-display">
                      <span className="vjs-control-text">
                        Stream Type
                      </span>
                      LIVE
                    </div>
                  </div>
                  <button className="vjs-seek-to-live-control vjs-control">
                    <span className="vjs-icon-placeholder">
                    </span>
                    <span className="vjs-control-text">
                      Seek to live, currently behind live
                    </span>
                    <span className="vjs-seek-to-live-text">
                      LIVE
                    </span>
                  </button>
                  <div className="vjs-remaining-time vjs-time-control vjs-control">
                    <span className="vjs-control-text">
                      Remaining Time
                    </span>
                    <span>
                      -
                    </span>
                    <span className="vjs-remaining-time-display">
                      1:26
                    </span>
                  </div>
                  <div className="vjs-custom-control-spacer vjs-spacer">
                  </div>
                  <div className="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                    <div className="vjs-playback-rate-value" id="vjs-playback-rate-value-label-vjs_video_554_component_822">
                      1x
                    </div>
                    <button className="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-button">
                      <span className="vjs-icon-placeholder">
                      </span>
                      <span className="vjs-control-text">
                        Playback Rate
                      </span>
                    </button>
                    <div className="vjs-menu">
                      <ul className="vjs-menu-content">
                      </ul>
                    </div>
                  </div>
                  <div className="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                    <button className="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-button">
                      <span className="vjs-icon-placeholder">
                      </span>
                      <span className="vjs-control-text">
                        Chapters
                      </span>
                    </button>
                    <div className="vjs-menu">
                      <ul className="vjs-menu-content">
                        <li className="vjs-menu-title">
                          Chapters
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                    <button className="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-button">
                      <span className="vjs-icon-placeholder">
                      </span>
                      <span className="vjs-control-text">
                        Descriptions
                      </span>
                    </button>
                    <div className="vjs-menu">
                      <ul className="vjs-menu-content">
                        <li className="vjs-menu-item vjs-selected">
                          <span className="vjs-menu-item-text">
                            descriptions off
                          </span>
                          <span className="vjs-control-text">
                            , selected
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                    <button className="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-button">
                      <span className="vjs-icon-placeholder">
                      </span>
                      <span className="vjs-control-text">
                        Captions
                      </span>
                    </button>
                    <div className="vjs-menu">
                      <ul className="vjs-menu-content">
                        <li className="vjs-menu-item vjs-texttrack-settings">
                          <span className="vjs-menu-item-text">
                            captions settings
                          </span>
                          <span className="vjs-control-text">
                            , opens captions settings dialog
                          </span>
                        </li>
                        <li className="vjs-menu-item vjs-selected">
                          <span className="vjs-menu-item-text">
                            captions off
                          </span>
                          <span className="vjs-control-text">
                            , selected
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                    <button className="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-button">
                      <span className="vjs-icon-placeholder">
                      </span>
                      <span className="vjs-control-text">
                        Audio Track
                      </span>
                    </button>
                    <div className="vjs-menu">
                      <ul className="vjs-menu-content">
                      </ul>
                    </div>
                  </div>
                  <button className="vjs-picture-in-picture-control vjs-control vjs-button">
                    <span className="vjs-icon-placeholder">
                    </span>
                    <span className="vjs-control-text">
                      Picture-in-Picture
                    </span>
                  </button>
                  <button className="vjs-fullscreen-control vjs-control vjs-button">
                    <span className="vjs-icon-placeholder">
                    </span>
                    <span className="vjs-control-text">
                      Fullscreen
                    </span>
                  </button>
                </div>
                <div className="vjs-error-display vjs-modal-dialog vjs-hidden">
                  <p className="vjs-modal-dialog-description vjs-control-text" id="vjs_video_554_component_1037_description">
                    This is a modal window.
                  </p>
                  <div className="vjs-modal-dialog-content">
                  </div>
                </div>
                <div className="vjs-modal-dialog vjs-hidden vjs-text-track-settings">
                  <p className="vjs-modal-dialog-description vjs-control-text" id="vjs_video_554_component_1043_description">
                    Beginning of dialog window. Escape will cancel and
                    close the window.
                  </p>
                  <div className="vjs-modal-dialog-content">
                    <div className="vjs-track-settings-colors">
                      <fieldset className="vjs-fg vjs-track-setting">
                        <legend id="captions-text-legend-vjs_video_554_component_1043">
                          Text
                        </legend>
                        <span className="vjs-text-color">
                          <label className="vjs-label" id="captions-foreground-color-vjs_video_554_component_1043">
                            Color
                          </label>
                          <select id="vjs_select_1069">
                            <option id="captions-foreground-color-vjs_video_554_component_1043-White">
                              White
                            </option>
                            <option id="captions-foreground-color-vjs_video_554_component_1043-Black">
                              Black
                            </option>
                            <option id="captions-foreground-color-vjs_video_554_component_1043-Red">
                              Red
                            </option>
                            <option id="captions-foreground-color-vjs_video_554_component_1043-Green">
                              Green
                            </option>
                            <option id="captions-foreground-color-vjs_video_554_component_1043-Blue">
                              Blue
                            </option>
                            <option id="captions-foreground-color-vjs_video_554_component_1043-Yellow">
                              Yellow
                            </option>
                            <option id="captions-foreground-color-vjs_video_554_component_1043-Magenta">
                              Magenta
                            </option>
                            <option id="captions-foreground-color-vjs_video_554_component_1043-Cyan">
                              Cyan
                            </option>
                          </select>
                        </span>
                        <span className="vjs-text-opacity vjs-opacity">
                          <label className="vjs-label" id="captions-foreground-opacity-vjs_video_554_component_1043">
                            Opacity
                          </label>
                          <select id="vjs_select_1070">
                            <option id="captions-foreground-opacity-vjs_video_554_component_1043-Opaque">
                              Opaque
                            </option>
                            <option id="captions-foreground-opacity-vjs_video_554_component_1043-SemiTransparent">
                              Semi-Transparent
                            </option>
                          </select>
                        </span>
                      </fieldset>
                      <fieldset className="vjs-bg vjs-track-setting">
                        <legend id="captions-background-vjs_video_554_component_1043">
                          Text Background
                        </legend>
                        <span className="vjs-bg-color">
                          <label className="vjs-label" id="captions-background-color-vjs_video_554_component_1043">
                            Color
                          </label>
                          <select id="vjs_select_1071">
                            <option id="captions-background-color-vjs_video_554_component_1043-Black">
                              Black
                            </option>
                            <option id="captions-background-color-vjs_video_554_component_1043-White">
                              White
                            </option>
                            <option id="captions-background-color-vjs_video_554_component_1043-Red">
                              Red
                            </option>
                            <option id="captions-background-color-vjs_video_554_component_1043-Green">
                              Green
                            </option>
                            <option id="captions-background-color-vjs_video_554_component_1043-Blue">
                              Blue
                            </option>
                            <option id="captions-background-color-vjs_video_554_component_1043-Yellow">
                              Yellow
                            </option>
                            <option id="captions-background-color-vjs_video_554_component_1043-Magenta">
                              Magenta
                            </option>
                            <option id="captions-background-color-vjs_video_554_component_1043-Cyan">
                              Cyan
                            </option>
                          </select>
                        </span>
                        <span className="vjs-bg-opacity vjs-opacity">
                          <label className="vjs-label" id="captions-background-opacity-vjs_video_554_component_1043">
                            Opacity
                          </label>
                          <select id="vjs_select_1072">
                            <option id="captions-background-opacity-vjs_video_554_component_1043-Opaque">
                              Opaque
                            </option>
                            <option id="captions-background-opacity-vjs_video_554_component_1043-SemiTransparent">
                              Semi-Transparent
                            </option>
                            <option id="captions-background-opacity-vjs_video_554_component_1043-Transparent">
                              Transparent
                            </option>
                          </select>
                        </span>
                      </fieldset>
                      <fieldset className="vjs-window vjs-track-setting">
                        <legend id="captions-window-vjs_video_554_component_1043">
                          Caption Area Background
                        </legend>
                        <span className="vjs-window-color">
                          <label className="vjs-label" id="captions-window-color-vjs_video_554_component_1043">
                            Color
                          </label>
                          <select id="vjs_select_1073">
                            <option id="captions-window-color-vjs_video_554_component_1043-Black">
                              Black
                            </option>
                            <option id="captions-window-color-vjs_video_554_component_1043-White">
                              White
                            </option>
                            <option id="captions-window-color-vjs_video_554_component_1043-Red">
                              Red
                            </option>
                            <option id="captions-window-color-vjs_video_554_component_1043-Green">
                              Green
                            </option>
                            <option id="captions-window-color-vjs_video_554_component_1043-Blue">
                              Blue
                            </option>
                            <option id="captions-window-color-vjs_video_554_component_1043-Yellow">
                              Yellow
                            </option>
                            <option id="captions-window-color-vjs_video_554_component_1043-Magenta">
                              Magenta
                            </option>
                            <option id="captions-window-color-vjs_video_554_component_1043-Cyan">
                              Cyan
                            </option>
                          </select>
                        </span>
                        <span className="vjs-window-opacity vjs-opacity">
                          <label className="vjs-label" id="captions-window-opacity-vjs_video_554_component_1043">
                            Opacity
                          </label>
                          <select id="vjs_select_1074">
                            <option id="captions-window-opacity-vjs_video_554_component_1043-Transparent">
                              Transparent
                            </option>
                            <option id="captions-window-opacity-vjs_video_554_component_1043-SemiTransparent">
                              Semi-Transparent
                            </option>
                            <option id="captions-window-opacity-vjs_video_554_component_1043-Opaque">
                              Opaque
                            </option>
                          </select>
                        </span>
                      </fieldset>
                    </div>
                    <div className="vjs-track-settings-font">
                      <fieldset className="vjs-font-percent vjs-track-setting">
                        <legend id="captions-font-size-vjs_video_554_component_1043">
                          Font Size
                        </legend>
                        <select id="vjs_select_1075">
                          <option id="captions-font-size-vjs_video_554_component_1043-50">
                            50%
                          </option>
                          <option id="captions-font-size-vjs_video_554_component_1043-75">
                            75%
                          </option>
                          <option id="captions-font-size-vjs_video_554_component_1043-100">
                            100%
                          </option>
                          <option id="captions-font-size-vjs_video_554_component_1043-125">
                            125%
                          </option>
                          <option id="captions-font-size-vjs_video_554_component_1043-150">
                            150%
                          </option>
                          <option id="captions-font-size-vjs_video_554_component_1043-175">
                            175%
                          </option>
                          <option id="captions-font-size-vjs_video_554_component_1043-200">
                            200%
                          </option>
                          <option id="captions-font-size-vjs_video_554_component_1043-300">
                            300%
                          </option>
                          <option id="captions-font-size-vjs_video_554_component_1043-400">
                            400%
                          </option>
                        </select>
                      </fieldset>
                      <fieldset className="vjs-edge-style vjs-track-setting">
                        <legend id="vjs_video_554_component_1043">
                          Text Edge Style
                        </legend>
                        <select id="vjs_select_1076">
                          <option id="vjs_video_554_component_1043-None">
                            None
                          </option>
                          <option id="vjs_video_554_component_1043-Raised">
                            Raised
                          </option>
                          <option id="vjs_video_554_component_1043-Depressed">
                            Depressed
                          </option>
                          <option id="vjs_video_554_component_1043-Uniform">
                            Uniform
                          </option>
                          <option id="vjs_video_554_component_1043-Dropshadow">
                            Drop shadow
                          </option>
                        </select>
                      </fieldset>
                      <fieldset className="vjs-font-family vjs-track-setting">
                        <legend id="captions-font-family-vjs_video_554_component_1043">
                          Font Family
                        </legend>
                        <select id="vjs_select_1077">
                          <option id="captions-font-family-vjs_video_554_component_1043-ProportionalSansSerif">
                            Proportional Sans-Serif
                          </option>
                          <option id="captions-font-family-vjs_video_554_component_1043-MonospaceSansSerif">
                            Monospace Sans-Serif
                          </option>
                          <option id="captions-font-family-vjs_video_554_component_1043-ProportionalSerif">
                            Proportional Serif
                          </option>
                          <option id="captions-font-family-vjs_video_554_component_1043-MonospaceSerif">
                            Monospace Serif
                          </option>
                          <option id="captions-font-family-vjs_video_554_component_1043-Casual">
                            Casual
                          </option>
                          <option id="captions-font-family-vjs_video_554_component_1043-Script">
                            Script
                          </option>
                          <option id="captions-font-family-vjs_video_554_component_1043-SmallCaps">
                            Small Caps
                          </option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="vjs-track-settings-controls">
                      <button className="vjs-default-button">
                        Reset
                        <span className="vjs-control-text">
                          restore all settings to the default values
                        </span>
                      </button>
                      <button className="vjs-done-button">
                        Done
                      </button>
                    </div>
                  </div>
                  <button className="vjs-close-button vjs-control vjs-button">
                    <span className="vjs-icon-placeholder">
                    </span>
                    <span className="vjs-control-text">
                      Close Modal Dialog
                    </span>
                  </button>
                  <p className="vjs-control-text">
                    End of dialog window.
                  </p>
                </div>
              </div>
              ⚠️ Assista ao vídeo e descubra como funciona:
            </div>
          </div>
        </main>
        <svg className="waves bg-[#C114B0] rotate-0 -mt-2 -z-40" preserveAspectRatio="none" shapeRendering="auto" viewBox="0 24 150 28" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" id="gentle-wave">
            </path>
          </defs>
          <g className="parallax">
            <use fill="rgba(86,11,131,0.4)" x={48} xlinkHref="#gentle-wave" y={0}>
            </use>
            <use fill="rgba(255,255,255,0.05)" x={48} xlinkHref="#gentle-wave" y={3}>
            </use>
            <use fill="rgba(255,255,255,0.01)" x={48} xlinkHref="#gentle-wave" y={5}>
            </use>
            <use fill="#0A0010" x={48} xlinkHref="#gentle-wave" y={7}>
            </use>
          </g>
        </svg>
        <div className="relative w-full max-w-[100vw]" id="pacotes">
          <div className="relative lg:overflow-visible overflow-y-clip overflow-x-hidden">
            <section ref={sectionRef} className="main-cards w-full mt-32 lg:mt-20 px-8 lg:gap-8 gap-10 lg:px-16 2xl:px-24 flex lg:flex-row flex-col">
              <div className="card">
                <span>
                  <i className="mdi mdi-gift-open mdi-24px lg:mdi-48px">
                  </i>
                </span>
                <div className="flex flex-col text-white">
                  {countTrigger && (
                    <span className="font-bold poppins count">
                      <CountUp key={`card1-${countTrigger}`} end={98769} duration={2.5} />
                    </span>
                  )}
                  <span className="poppins">
                    Total de
                    pedidos
                  </span>
                </div>
              </div>
              <div className="card">
                <span>
                  <i className="mdi mdi-star mdi-24px lg:mdi-48px">
                  </i>
                </span>
                <div className="flex flex-col text-white">
                  <span className="font-bold poppins">
                    4.9
                  </span>
                  <span className="poppins">
                    Classificações
                    de clientes
                  </span>
                </div>
              </div>
              <div className="card">
                <span>
                  <i className="mdi mdi-account-multiple mdi-24px lg:mdi-48px">
                  </i>
                </span>
                <div className="flex flex-col text-white">
                  {countTrigger && (
                    <span className="font-bold poppins count">
                      <CountUp key={`card2-${countTrigger}`} end={134456} duration={2.5} />
                    </span>
                  )}
                  <span className="poppins">
                    Numero de
                    clientes
                  </span>
                </div>
              </div>
            </section>
            <section className="lg:px-24 2xl:px-28 px-4 mt-20">
              <div className="card-info w-full bg-[#68486932] rounded-3xl border border-[#A72CCE] text-white h-fit">
                <h1 className="font-bold text-center text-xl lg:text-4xl">
                  Desde 2014, mais de
                  <span className="text-[#c166dc] font-bold">
                    46.392
                  </span>
                  clientes
                  <span className="text-[#c166dc] font-bold">
                    satisfeitos
                  </span>
                  já impulsionaram suas
                  <span className="text-[#c166dc] font-bold">
                    contas no Instagram!
                  </span>
                </h1>
                <button className="w-fit px-4 py-2 font-bold ubuntu rounded-[120px] bg-[#a337c4] flex items-center mt-8">
                  Nossos
                  serviços
                  <i className="mdi mdi-arrow-right mdi-24px">
                  </i>
                </button>
              </div>
            </section>
            <div className="-z-10 lg:-left-[50px] -top-10 2xl:-left-[5vw] elipse303 hidden lg:block overflow-hidden">
            </div>
            <div className="-z-10 elipse304 lg:top-[-500px] 2xl:top-[-400px] 2xl:right-0 lg:-right-[300px] -right-[600px] top-[200px] overflow-hidden">
            </div>
          </div>
          <PacotesSection />
          <Iphone />
        </div>
        <div className="Toastify">
        </div>
      </div>
      <FAQSection />
      <Footer />
    </>
  );
}

export default Home;
